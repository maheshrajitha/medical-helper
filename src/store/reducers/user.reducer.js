import { LOGIN , GET_AVAILABLE_DOCTOR } from '../actiontypes/user.actionType';

let initialState = {
    loggedUser: null,
    doctorsList : []
}

export const userReducer = (state =initialState , action) => {
    switch (action.type) {
        case LOGIN:
            state.loggedUser = action.loggedUser
            return { ...state }
        case GET_AVAILABLE_DOCTOR:
            state.doctorsList = action.doctorsList;
            return {...state}
        default:
            return state
    }
}