import { LOGIN } from '../actiontypes/user.actionType';
export function login(user) {
    return dispatch=> dispatch(loginAsync(user))
}

export function loginAsync(user) {
    return {
        action: LOGIN,
        loggedUser : user
    }
}