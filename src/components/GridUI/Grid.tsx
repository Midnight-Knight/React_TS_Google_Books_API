import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import "./Grid.css";
import {BookCard} from "../DivsUI/Divs";
import {Book} from "../../logic/Books/Books";
import {searchBooks} from "../../logic/Books/BooksManager";
import {MyState} from "../../Reducer";

export const GridBooks:React.FC = () => {
        const [books, setBooks] = useState<Book[]>([]);
        const searchParams:any = useSelector((state: MyState) => state.data);
        const [API_data, setAPI_data] = useState<any>(null);

        useEffect(() => {
            if (!searchParams) {
                return;
            }
            async function fetchBooks() {
                const data = await searchBooks(searchParams.title,searchParams.category,searchParams.sortBy);
                setAPI_data(data);
            }
            fetchBooks();
        }, [searchParams]);

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
                setBooks(BookData);
            }
        }, [API_data]);

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