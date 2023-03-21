import React from "react";
import {Book} from "./Books";
import {BookCard} from "../../components/DivsUI/Divs";
import {GoogleBooks, search} from "google-books-search";

const API_KEY = "AIzaSyDx-dY3gLgjWubHaZpAEh6l-iLSLNSDEKI";
const BASE_URL = "https://www.googleapis.com/books/v1";

export const searchBooks = async (query: string) => {
    const response = await axios.get(`${BASE_URL}/volumes?q=${query}&key=${API_KEY}`);
    return response.data;
};