import { LOGIN } from '../actiontypes/user.actionType';

let initialState = {
    loggedUser : null
}

export const userReducer = (state =initialState , action) => {
    switch (action.type) {
        case LOGIN:
            state.loggedUser = action.loggedUser
            return{...state}
        default:
            return state
    }
}