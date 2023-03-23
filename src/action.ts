import {Data, NumberOfResults} from "./type";

export interface UpdateDataAction {
    type: 'UPDATE_DATA';
    payload: Data;
}

export interface UpdateNumberOfResultsAction {
    type: 'UPDATE_NUMBER_OF_RESULTS';
    payload: NumberOfResults;
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