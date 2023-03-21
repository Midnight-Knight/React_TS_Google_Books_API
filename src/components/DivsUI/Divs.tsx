import React from "react";
import {Book} from "../../logic/Books/Books";
import "./Divs.css";

interface FoundResultsProps {
    NumberOfResults: number;
}

export const FoundResults:React.FC<FoundResultsProps> = ({NumberOfResults}) => {
    return (
        <div id="FoundResults">
            <h3>Found {NumberOfResults} results</h3>
        </div>
    );
};

export const LoadMore:React.FC = () => {
    return (
        <div id="LoadMore">
            <button>Load More</button>
        </div>
    );
};
export const BookCard: React.FC<Book> = (props) => {
    return (
        <div className="BookCard">
            <div>
                <img alt={"book_"}/>
            </div>
            <div>
                <p className="categories"></p>
                <h6 className="name_book"></h6>
                <p className="authors_book"></p>
            </div>
        </div>
    );
};

export const BackgroundBlock:React.FC = () => {
    return(
        <div id="BackgroundBlock"></div>
    );
};
