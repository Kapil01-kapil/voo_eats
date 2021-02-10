import axios from 'axios'

import {
    CLEAR_LOGIN_ERROR_MESSAGE
} from '../actionType/auth'

export const fetchClearLOginErrorMessage= () => {
    return {
        type: CLEAR_LOGIN_ERROR_MESSAGE,
        payload: null
    }
}

export const clearLoginErrorMessage = () => dispatch => { 

    dispatch(fetchClearLOginErrorMessage()); 

}
