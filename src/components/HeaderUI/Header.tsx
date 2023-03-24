import React, {useState} from "react";
import "./Header.css";
import "./../../assets/search-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import {updateData} from "../../action";

export const Header = () => {
    const [title,bookNameFunction] = useState<string>('js');
    const [category,categoryFunction] = useState<string>('all');
    const [sortBy,sortOrderFunction] = useState<string>('relevance');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        Enter();
    };

    const handleSubmitKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            Enter();
        }
    };

    function Enter()
    {
        const searchParams = {
            title,
            category,
            sortBy,
        };

        dispatch(updateData(searchParams));
        let LoadMore:any = document.getElementById('ButtonLoadMore');
        let BooksSection:any = document.getElementById('BooksSection');
        LoadMore.style.opacity = '1';
        BooksSection.style.position = 'static';
    }

    return (
        <header>
            <div>
                <h1>Search for books</h1>
                <div>
                    <div id="inputDiv">
                        <input onChange={(e) => bookNameFunction(e.target.value)} onKeyDown={handleSubmitKey} type="text"/>
                        <button onClick={handleSubmit}><div></div></button>
                    </div>
                    <div>
                        <div>
                            <p>Categories</p>
                            <select onChange={(e) => categoryFunction(e.target.value)} id="Categories">
                                <option value="all">all</option>
                                <option value="art">art</option>
                                <option value="biography">biography</option>
                                <option value="computers">computers</option>
                                <option value="history">history</option>
                                <option value="medical">medical</option>
                                <option value="poetry">poetry</option>
                            </select>
                        </div>
                        <div>
                            <p>Sorting by</p>
                            <select onChange={(e) =>  sortOrderFunction(e.target.value)} id="Sorting">
                                <option value="relevance">relevance</option>
                                <option value="newest">newest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};