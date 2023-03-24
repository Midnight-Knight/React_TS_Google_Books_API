import {Data, NumberOfResults, UpdateBook} from "./type";
import {Book} from "./logic/Books/Books";

export interface UpdateDataAction {
    type: 'UPDATE_DATA';
    payload: Data;
}

export interface UpdateNumberOfResultsAction {
    type: 'UPDATE_NUMBER_OF_RESULTS';
    payload: NumberOfResults;
}

export interface UpdateBookAction {
    type: 'UPDATE_BOOK';
    payload: UpdateBook;
}

export interface UpdateBookBlockAction {
    type: 'UPDATE_BOOK_BLOCK';
    payload: Book;
}

export const updateData = (data: Data): UpdateDataAction => {
    return {
        type: 'UPDATE_DATA',
        payload: data,
    };
};

export const UpdateNumberOfResults = (number: NumberOfResults): UpdateNumberOfResultsAction => {
    return {
        type: 'UPDATE_NUMBER_OF_RESULTS',
        payload: number,
    };
};

export const UpdateUpdateBook = (boolean: UpdateBook): UpdateBookAction => {
    return {
        type: 'UPDATE_BOOK',
        payload: boolean,
    }
}

export const UpdateUpdateBookBlock = (book: Book): UpdateBookBlockAction => {
    return {
        type: 'UPDATE_BOOK_BLOCK',
        payload: book,
    }
}