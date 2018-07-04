const url = {
    USER_LOGIN: '/login'
}

export function getLogin(password) {

    return axios.post(url.USER_LOGIN, {
        "username": "admin",
        "password": password
    }).then((response) => {
        return Promise.resolve(response.data);
    })
}