import React from "react";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div>
                <h1>Search for books</h1>
                <div>
                    <div id="inputDiv">
                        <input type="text"/>
                        <button><div></div></button>
                    </div>
                    <div>
                        <div>
                            <p>Categories</p>
                            <select>
                                <option>all</option>
                                <option>art</option>
                                <option>biography</option>
                                <option>computers</option>
                                <option>history</option>
                                <option>medical</option>
                                <option>poetry</option>
                            </select>
                        </div>
                        <div>
                            <p>Sorting by</p>
                            <select>
                                <option>relevance</option>
                                <option>newest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};