import {Data, NumberOfResults, UpdateBook} from "./type";

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