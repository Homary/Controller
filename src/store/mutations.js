import * as types from './mutation-types.js';
import * as STORAGE from '@common/js/storage.js';

export default {
    /**
     * 设置系统列表
     */
    [types.SET_SYSTEM_LIST] (state, sysList){
        state.list = sysList;
        STORAGE.setStorage(STORAGE.KEY_NAV_LIST, sysList);
    },
    /**
     * 刷新列表 (localStorage --> vuex.state)
     */
    [types.FLASE_NAV_LIST] (state){
        let data = STORAGE.getStorage(STORAGE.KEY_NAV_LIST);
        state.list = data;
    },
    /**
     * 设置用户信息 (localStorage --> vuex.state)
     */
    [types.SET_USER_INFO] (state, key){
        state.user.id = STORAGE.getStorage(key).id;
        state.user.userName = STORAGE.getStorage(key).userName;
        state.user.userIconUrl = STORAGE.getStorage(key).userIconUrl;
    }
}

