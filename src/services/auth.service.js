export async function login(email , password) {
    return fetch(``, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            email: email,
            password : password
        })
    }).then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error('Check Username And Password');
    }).catch(err => {
        throw err;
    })
}