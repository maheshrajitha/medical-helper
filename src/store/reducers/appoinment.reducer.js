let initialState = {
    appoinments : []
}
export const appoinmentReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            state.appoinments = action.appoinments;
            return {...state}
        default:
            return state
    }
}