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
    },

    /**
     *  保存当前选中系统
     */
    [types.SET_SELECT_SYS] (state, screenInfo){

        let windows = {};
        windows.position = screenInfo.position;
        windows.sysId = screenInfo.sysId;
        windows.wIndex = screenInfo.wIndex;

        state.sysId = screenInfo.sysId;
        state.position = screenInfo.position;
        state.screen.screenId = screenInfo.screenId;

        state.screen.windows.push(windows);
    },

    /**
     *  由主页二级菜单传递当前选中系统ID
     */
    [types.SET_SYS_ID] (state, sysObj){
        state.screen.windows[sysObj.i].sysId = sysObj.sysId;
        state.sysId = sysObj.sysId;
    },

    /**
     *  保存当前分屏各个窗口数据
     */
    [types.SET_WINDOW_DATA] (state, win){
        state.cur_sys[win.ref][win.position].name = win.data;
        state.cur_sys[win.ref][win.position].id = win.id;
    },

    /**
     *  清空当前选中分屏窗口的系统
     */
    [types.CLEAR_CUR_SYS] (state, sys){
        state.cur_sys[sys.screen_id][sys.position] = {name: '', id: -1};
    },

    /**
     *  切换分屏数据
     *  旧模式数据 -> 新模式数据
     *  旧模式数据清空
     */
    [types.TOGGLE_SCREEN_DATA] (state, modes){
        let old_mode = modes.old_mode,
            new_mode = modes.new_mode,
            old_keys = Object.keys(state.cur_sys[modes.old_mode]),
            new_keys = Object.keys(state.cur_sys[modes.new_mode]),
            len = old_keys.length < new_keys.length ? old_keys.length : new_keys.length;

        for(let i=0; i<len; i++){
           state.cur_sys[new_mode][new_keys[i]] = state.cur_sys[old_mode][old_keys[i]];

           let wIndex = state.cur_sys[old_mode][old_keys[i]].wIndex;
           state.cur_sys[old_mode][old_keys[i]] = { name: '', id: '', wIndex};
        }
console.log('state数据处理完成')
    },

    /**
     *  选中预案, 填入数据
     */
    [types.SET_PLAN_DATA] (state, data){
console.log(data)
        let name = data.name,
            windows = data.windows,
            keys = Object.keys(state.cur_sys[name]);

        for(let i=0, len=keys.length; i<len; i++){

            for(let j=0, _len=windows.length; j<_len; j++){

                if(keys[i] == windows[j].wid){

                    state.cur_sys[name][keys[i]].id = windows[j].sysId;

                    for(let k=0, _len_=state.list.length; k<_len_; k++){

                        if(state.list[k].id == windows[j].sysId){

                            state.cur_sys[name][keys[i]].name = state.list[k].name;
                        }
                    }
                }
            }
        }

        state.planData = true;
    },

    /**
     *  选中预案之后重新设置screenId,
     *  不然选择预案再保存会报错
     */
    [types.SET_SCREEN_ID] (state, screenId){
        state.screen.screenId = screenId;
    },

    /**
     *  由主页 -> 分屏时, 或者选中预案时
     *  切换分屏模式的选中状态
     */
    [types.SET_SPLIT_ID] (state, splitId){
        state.splitId = splitId;
    },

    [types.CLAER_SPLIT_ID] (state){
        state.splitId = -1;
    },

    [types.SET_TIP_SPLIT] (state){
        state.tipSplit = !state.tipSplit;
    },

    [types.SET_ACTION] (state, action){
        state.action = action;
    },

    [types.SET_TOGGLE_SYS] (state){
        state.toggleSys = !state.toggleSys;
    }
}

