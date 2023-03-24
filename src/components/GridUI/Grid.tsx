import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Grid.css";
import {BookCard} from "../DivsUI/Divs";
import {Book} from "../../logic/Books/Books";
import {searchBooks} from "../../logic/Books/BooksManager";
import {MyState} from "../../Reducer";
import {UpdateNumberOfResults} from "../../action";

export const GridBooks:React.FC = () => {
        const [books, setBooks] = useState<Book[]>([]);
        const searchParams:any = useSelector((state: MyState) => state.data);
        const booleanLoadMore:any = useSelector((state:MyState) => state.boolean);
        const [API_data, setAPI_data] = useState<any>(null);
        const dispatch = useDispatch();
        const [booleanPushArr, booleanPushArrFunction] = useState<boolean>(false);

        useEffect(() => {
            if (!searchParams) {
                return;
            }
            const x:any = document.getElementById('BlockLoad');
            if (x)
            {
                x.style.transform = "translateX(0)";
                x.style.opacity = "1";
            }
            const y:any = document.getElementById('BlockBook');
            if (y)
            {
                setTimeout(() => {y.style.opacity = "0";}, 500);
                setTimeout(() => {y.style.transform = "translateX(-100vw)";}, 500);
            }
            async function fetchBooks() {
                const data = await searchBooks(searchParams.title,searchParams.category,searchParams.sortBy);
                setAPI_data(data);
            }
            fetchBooks();
            booleanPushArrFunction(false);
        }, [searchParams]);

        useEffect(() => {
            if (!booleanLoadMore)
            {
                return;
            }

            async function fetchBooks() {
                const data = await searchBooks(searchParams.title,searchParams.category,searchParams.sortBy, true);
                setAPI_data(data);
            }
            fetchBooks();
            booleanPushArrFunction(true);
        },[booleanLoadMore])

        useEffect(() => {
            if (!API_data) {
                return; // early return if API_data is null
            }
            if (API_data) {
                let BookData:Book[] = [];
                for (let i = 0; i < 30; ++i) {
                    const img:string = API_data.items[i].volumeInfo.imageLinks ? API_data.items[i].volumeInfo.imageLinks.smallThumbnail : "";
                    BookData.push(
                        {
                            name_book: API_data.items[i].volumeInfo.title,
                            image_book: img,
                            categories: API_data.items[i].volumeInfo.categories,
                            array_authors: API_data.items[i].volumeInfo.authors,
                            description: API_data.items[i].volumeInfo.description,
                        }
                        )
                }
                console.log(booleanPushArr);
                if (booleanPushArr === true)
                {
                    setBooks([...books,...BookData]);
                }
                else
                {
                    setBooks(BookData);
                }
            }
        }, [API_data]);

        useEffect(() => {
            const number:number = books.length;
            console.log(books.length);
            const numberParam = {
                number,
            };

            dispatch(UpdateNumberOfResults(numberParam));
        }, [books])
        return (
            <div id="GridBooks">
                    {books.map((book:Book,index:number) => (
                        <React.Fragment key={index}>
                                {API_data && <BookCard
                                    name_book={book.name_book}
                                    image_book={book.image_book}
                                    categories={book.categories}
                                    array_authors={book.array_authors}
                                    description={book.description}
                                />}
                        </React.Fragment>
                    ))}
            </div>
        );
};