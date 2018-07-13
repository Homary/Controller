const USER_LOGIN = '/user/checkLogin'; // 登录接口
const QUIT_LOGIN = '/user/loginOut'; //退出登录

export function getLogin(password) {

    return axios.post(USER_LOGIN, {
        "username": "admin",
        "password": password
    }).then((response) => {
        return Promise.resolve(response.data);
    })
}

export function quitLogin() {
    return axios.get(QUIT_LOGIN)
            .then((res)=>{
                return Promise.resolve(res.data);
            })
}