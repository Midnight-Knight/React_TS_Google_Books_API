import {Data} from "./type";

export interface UpdateDataAction {
    type: 'UPDATE_DATA';
    payload: Data;
}

export const updateData = (data: Data): UpdateDataAction => {
    return {
        type: 'UPDATE_DATA',
        payload: data,
    };
};