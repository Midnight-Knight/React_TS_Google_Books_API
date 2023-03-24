import {Data, NumberOfResults, UpdateBook} from "./type";
import {UpdateDataAction, UpdateNumberOfResultsAction, UpdateBookAction, UpdateBookBlockAction} from "./action";
import {Book} from "./logic/Books/Books";

export interface MyState {
    data: Data | null;
    number: NumberOfResults | null;
    boolean: UpdateBook | null;

    book: Book | null;
}

const initialState: MyState = {
    data: null,
    number: null,
    boolean: null,
    book: null,
};

export const myReducer = (state = initialState, action: UpdateDataAction | UpdateNumberOfResultsAction | UpdateBookAction | UpdateBookBlockAction): MyState => {
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
        case 'UPDATE_BOOK_BLOCK':
            return {
                ...state,
                book: action.payload,
            }
        default:
            return state;
    }
};