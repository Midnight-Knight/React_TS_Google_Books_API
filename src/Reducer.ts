import {Data, NumberOfResults} from "./type";
import {UpdateDataAction, UpdateNumberOfResultsAction} from "./action";

export interface MyState {
    data: Data | null;
    number: NumberOfResults | null;
}

const initialState: MyState = {
    data: null,
    number: null,
};

export const myReducer = (state = initialState, action: UpdateDataAction | UpdateNumberOfResultsAction): MyState => {
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
        default:
            return state;
    }
};