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
            state.appoinments = [];
            for (let i = 1; i < 0; i++)
                state.appoinments.push({
                    doctorName: `Doc ${i}`,
                    patientName: `Patient ${i}`,
                    time : `0${i} : 00 AM`
                })
            return state
    }
}