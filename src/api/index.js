const URL_SYS_LIST = '/system/getSysList'; // 获取系统列表
const URL_SCREEN_LIST = '/screen/getScreenList'; // 获取分屏列表
const URL_PLAN_LIST = '/plan/getPlanInfo'; // 获取预案列表
const URL_SAVE_PLAN = '/plan/savePlanInfo'; // 保存预案
const URL_DEL_PLAN = '/plan/deletePlanInfo'; // 删除预案
const URL_SEND_INSTRUCTION = '/instruction/sendSysInstruction'; // 发送主页指令

export function getSysList() {
    return axios.get(URL_SYS_LIST)
            .then((res) => {
                return Promise.resolve(res.data);
            })
}

export function getScreenList() {
    return axios.get(URL_SCREEN_LIST)
            .then((res) => {
                return Promise.resolve(res.data);
            })
}

export function getPlanList() {
    return axios.get(URL_PLAN_LIST)
            .then((res) => {
                return Promise.resolve(res.data);
            })
}

export function savePlan(data) {
    return axios.post(URL_SAVE_PLAN, data)
            .then((res) => {
                return Promise.resolve(res.data);
            })
}

export function delPlan(id) {
    return axios.post(URL_DEL_PLAN, id)
            .then(res => {
                return Promise.resolve(res.data);
            })
}

export function sendInstruction(data) {
    return axios.post(URL_SEND_INSTRUCTION, data)
            .then(res => {
            console.log(data)
                return Promise.resolve(res.data);
            })
}