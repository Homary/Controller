const GET_SYS_LIST = '/system/getSysList'; // 获取系统列表

export function getSysList() {
    return axios.get(GET_SYS_LIST)
                .then((res) => {
                    return Promise.resolve(res.data);
                })
}