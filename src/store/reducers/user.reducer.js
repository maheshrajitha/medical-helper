import { LOGIN , GET_AVAILABLE_DOCTOR } from '../actiontypes/user.actionType';

let initialState = {
    loggedUser: null,
    doctorsList: [],
    doctor: { name: 'mahesh' },
    channellings : []
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
            state.doctorsList = [];
            state.channellings = [];
            for (let i = 1; i < 100; i++)
                state.doctorsList.push({
                    name : `Doctor ${i}`
                })
            for (let i = 1; i < 101; i++)
                state.channellings.push({
                    date: `2020-${i}-${i}`,
                    name: `patient ${i}`,
                    symptoms: ['Cold ','Fever']
                })
            return state
    }
}