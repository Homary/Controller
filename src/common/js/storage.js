/*设置localStorage*/

export const KEY_NAV_LIST = 'navList'; // 导航栏key
export const KEY_USER_IFNO = 'userInfo'; // 用户信息
export const KEY_HOME_ICON = 'homeIcon'; // 主页图标状态
export const KEY_SPLIT_ICON = 'splitIcon'; // 分屏图标

export function getStorage(name) {
    return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : '';
}

export function setStorage(key, value) {
    let _value = JSON.stringify(value);

    localStorage.setItem(key, _value);

    return;
}

export function clearStorage() {
    localStorage.clear();

    return;
}