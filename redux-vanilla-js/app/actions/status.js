import { statusTypes } from '../constants/actionTypes'

const { CHAGE_STATUS } = statusTypes;

export const changeStatus = text => {
    return (dispatch) => {
        setTimeout(() => dispatch({
            type: CHAGE_STATUS,
            payload: text
        }), 1000)
    }
}