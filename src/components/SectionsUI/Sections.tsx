import React from "react";
import "./Sections.css";
import {FoundResults, LoadMore} from "../DivsUI/Divs";
import {GridBooks} from "../GridUI/Grid";

export const BooksSections:React.FC = () => {

    return (
        <section id="BooksSection">
            <FoundResults/>
            <GridBooks/>
            <LoadMore/>
        </section>
    );
};