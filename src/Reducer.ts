import {Data, NumberOfResults, UpdateBook} from "./type";
import {UpdateDataAction, UpdateNumberOfResultsAction, UpdateBookAction} from "./action";

export interface MyState {
    data: Data | null;
    number: NumberOfResults | null;
    boolean: UpdateBook | null;
}

const initialState: MyState = {
    data: null,
    number: null,
    boolean: null,
};

export const myReducer = (state = initialState, action: UpdateDataAction | UpdateNumberOfResultsAction | UpdateBookAction): MyState => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...state,
                data: action.payload,
            };
        case 'UPDATE_NUMBER_OF_RESULTS':
            return {
                ...state,
                number: action.payload,
            }
        case 'UPDATE_BOOK':
            return {
                ...state,
                boolean: action.payload,
            }
        default:
            return state;
    }
};