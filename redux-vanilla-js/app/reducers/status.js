import { statusTypes } from '../constants/actionTypes'

const { CHAGE_STATUS } = statusTypes;

const initialState = { status: '' };

export const statusReducer = ( state = initialState, action) => {
    const status = action.payload;

    switch( action.type ) {
        case CHAGE_STATUS:
            return {...state, status}
        default:
            return state;
    }
};