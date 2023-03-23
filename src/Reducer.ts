import {Data} from "./type";
import {UpdateDataAction} from "./action";

export interface MyState {
    data: Data | null;
}

const initialState: MyState = {
    data: null,
};

export const myReducer = (state = initialState, action: UpdateDataAction): MyState => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};