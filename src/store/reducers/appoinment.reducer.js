let initialState = {
    appoinments: [{
        doctorName: 'Mahesh Rajitha Bandara',
        patientName: 'Test Patient',
        time: '06 : 00 PM'
    }]
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