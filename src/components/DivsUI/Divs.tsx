import React from "react";
import {Book} from "../../logic/Books/Books";
import "./Divs.css";
import {useDispatch, useSelector} from "react-redux";
import {MyState} from "../../Reducer";
import {UpdateUpdateBook} from "../../action";
import imagineNo from "../../assets/free-icon-no-pictures-3875148.png";


export const FoundResults:React.FC = () => {
    const numberParam:any = useSelector((state: MyState) => state.number);
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
        dispatch(UpdateUpdateBook(booleanLoadMore));
    };

    return (
        <div id="LoadMore">
            <button id="ButtonLoadMore" onClick={handleSubmit}>Load More</button>
        </div>
    );
};
export const BookCard:React.FC<Book> = (props) => {
    let imgP:any = imagineNo;
    if (props.image_book !== "")
    {
        imgP = props.image_book;
    }
    return (
        <div className="BookCard">
            <div>
                <img src={imgP} alt={"book_"+props.name_book}/>
            </div>
            <div>
                <p className="categories">{props.categories && props.categories.length > 0 ? props.categories[0] : ""}</p>
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
