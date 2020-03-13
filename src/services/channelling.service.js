export async function getDoctorsBySymptoms(symptomOne , symptomTwo , symptomThree , symptomFour) {
    return fetch(``, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            symptomOne: symptomOne,
            symptomTwo: symptomTwo,
            symptomThree: symptomThree,
            symptomFour : symptomFour
        }),
        credentials : 'same-origin'
    }).then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error('Something Went Wrong');
    }).catch(err => {
        throw err;
    })
}