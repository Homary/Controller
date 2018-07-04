import axios from 'axios';

const url = {
    USER_LOGIN: '/user/login'
}

export function loginApi(password) {
    return axios.post(url.USER_LOGIN, {
        username: 'admin',
        password: password
    }).then((response) => {
        return Promise.resolve(response.data);
    })
}