import React, {useEffect, useState} from "react";
import {Book} from "../../logic/Books/Books";
import "./Divs.css";
import {useDispatch, useSelector} from "react-redux";
import {MyState} from "../../Reducer";
import {UpdateUpdateBook, UpdateUpdateBookBlock} from "../../action";
import imagineNo from "../../assets/free-icon-no-pictures-3875148.png";


export const FoundResults:React.FC = () => {
    const numberParam:any = useSelector((state: MyState) => state.number);
    useEffect(() => {
        const x:any = document.getElementById('BlockLoad');
        if (x)
        {
            setTimeout(() => {x.style.opacity = "0";}, 1000);
            setTimeout(() => {x.style.transform = "translateX(100vw)";}, 1500);
        }
    }, [numberParam])
    if (!numberParam)
    {
        return (
            <div id="FoundResults">
                <h3>Found 0 results</h3>
            </div>
        );
    }
    return (
        <div id="FoundResults">
            <h3>Found {numberParam.number} results</h3>
        </div>
    );
};

export const LoadMore:React.FC = () => {
    const dispatch = useDispatch();
    const boolean:boolean = true;
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const booleanLoadMore = {
            boolean,
        };
        const x:any = document.getElementById('BlockLoad');
        if (x)
        {
            x.style.transform = "translateX(0)";
            x.style.opacity = "1";
        }
        dispatch(UpdateUpdateBook(booleanLoadMore));
    };

    return (
        <div id="LoadMore">
            <button id="ButtonLoadMore" onClick={handleSubmit}>Load More</button>
        </div>
    );
};
export const BookCard:React.FC<Book> = (props) => {
    const dispatch = useDispatch();
    const handleSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const updatedBook = {...props};
        dispatch(UpdateUpdateBookBlock(updatedBook));
    };

    let imgP:any = imagineNo;
    if (props.image_book !== "")
    {
        imgP = props.image_book;
    }
    return (
        <div onClick={handleSubmit} className="BookCard">
            <div>
                <img src={imgP} alt={"book_"+props.name_book}/>
            </div>
            <div>
                <p className="categories">{(props.categories && props.categories.length > 0 ? props.categories[0] : "")}</p>
                <h6 className="name_book">{props.name_book}</h6>
                <p className="authors_book">{props.array_authors && props.array_authors.length > 0 ? props.array_authors.join(', ') : ''}</p>
            </div>
        </div>
    );
};

export const BackgroundBlock:React.FC = () => {
    return(
        <div id="BackgroundBlock"></div>
    );
};

export const BlockBook: React.FC = () => {
    const redux: any = useSelector((state: MyState) => state.book);
    const [element, setElement] = useState<HTMLElement | null>(null);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const x: any = document.querySelector("html");
        const y:any = document.getElementById('BlockLoad');
        x.style.overflowY = "overlay";
        if (element && y)
        {
            y.style.transform = "translateX(0)";
            y.style.opacity = "1";
            setTimeout(() => {element.style.opacity = "0";}, 500)
            setTimeout(() => {element.style.transform = "translateX(-100%)";}, 500);
            setTimeout(() => {y.style.opacity = "0";}, 1500);
            setTimeout(() => {y.style.transform = "translateX(-100vw)";}, 2000);
        }
    };

    useEffect(() => {
        if (redux && element) {
            const x: any = document.querySelector("html");
            const y:any = document.getElementById('BlockLoad');
            y.style.transform = "translateX(0)";
            y.style.opacity = "1";
            x.style.overflowY = "hidden";
            setTimeout(() => {element.style.transform = "translateX(0)";}, 1000);
            setTimeout(() => {element.style.opacity = "1";}, 1000);
            setTimeout(() => {y.style.opacity = "0";}, 1500);
            setTimeout(() => {y.style.transform = "translateX(-100vw)";}, 2000);
        }
    }, [redux, element]);

    useEffect(() => {
        const el: HTMLElement | null = document.getElementById("BlockBook");
        setElement(el);
    }, [redux]);

    if (!redux) {
        return null;
    }
    let imgP: any = imagineNo;
    if (redux.image_book !== "") {
        imgP = redux.image_book;
    }
    return (
        <div id="BlockBook">
            <div>
                <img src={imgP} alt="" />
            </div>
            <div>
                <div>
                    <p>
                        {redux.categories && redux.categories.length > 0
                            ? redux.categories.join(" / ")
                            : ""}
                    </p>
                    <h5>{redux.name_book}</h5>
                    <p>
                        {redux.array_authors && redux.array_authors.length > 0
                            ? redux.array_authors.join(", ")
                            : ""}
                    </p>
                </div>
                <div>
                    <p>{redux.description ? redux.description : "Описание отсутствует"}</p>
                </div>
                <div>
                    <button onClick={handleSubmit}></button>
                </div>
            </div>
        </div>
    );
};

export const DivLoading = () => {
    return (
        <div id="BlockLoad">
            <div id="SquareLoad">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

