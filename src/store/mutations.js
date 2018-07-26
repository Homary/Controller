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
        let wIndex = state.cur_sys[sys.screen_id][sys.position].wIndex;

        state.cur_sys[sys.screen_id][sys.position] = {name: '', id: -1, wIndex};
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
    },

    /**
     *  选中预案, 填入数据
     */
    [types.SET_PLAN_DATA] (state, data){

        let name = data.name,
            windows = data.windows,
            keys = Object.keys(state.cur_sys[name]),
            _cur_sys = state.cur_sys;

        for(let i=0, len=keys.length; i<len; i++){

            for(let j=0, _len=windows.length; j<_len; j++){


                if(keys[i] == windows[j].wid){

                    _cur_sys[name][keys[i]].id = windows[j].sysId;

                    for(let k=0, _len_=state.list.length; k<_len_; k++){

                        if(state.list[k].id === windows[j].sysId){
                            _cur_sys[name][keys[i]].name = state.list[k].name;

                            break;
                        }
                    }
                }
            }
        }

        state.cur_sys = _cur_sys;

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

    [types.SET_TOGGLE_SYS] (state, boo){
        state.toggleSys = boo;
    },

    [types.INIT_CUR_SYS] (state){
        state.cur_sys = {};
            state.cur_sys = { 
            ['fullScreen']: {
                ['screen-center']: {
                    name: '',
                    id: -1,
                    wIndex: 0
                }
            },
            ['screen1x2']: {
                ['screen-left']: {
                    name: '',
                    id: -1,
                    wIndex: 0
                },
                ['screen-right']: {
                    name: '',
                    id: -1,
                    wIndex: 1
                }
            },
            ['screen1x3']: {
                ['screen-left']: {
                    name: '',
                    id: -1,
                    wIndex: 0
                },
                ['screen-center']: {
                    name: '',
                    id: -1,
                    wIndex: 1
                },
                ['screen-right']: {
                    name: '',
                    id: -1,
                    wIndex: 2
                }
            },
            ['screen2x2']: {
                ['screen-top-left']: {
                    name: '',
                    id: -1,
                    wIndex: 0
                },
                ['screen-top-right']: {
                    name: '',
                    id: -1,
                    wIndex: 1
                },
                ['screen-bottom-left']: {
                    name: '',
                    id: -1,
                    wIndex: 2
                },
                ['screen-bottom-right']: {
                    name: '',
                    id: -1,
                    wIndex: 3
                }
            },
            ['screen2x3']: {
                ['screen-top-left']: {
                    name: '',
                    id: -1,
                    wIndex: 0
                },
                ['screen-top-center']: {
                    name: '',
                    id: -1,
                    wIndex: 1
                },
                ['screen-top-right']: {
                    name: '',
                    id: -1,
                    wIndex: 2
                },
                ['screen-bottom-left']: {
                    name: '',
                    id: -1,
                    wIndex: 3
                },
                ['screen-bottom-center']: {
                    name: '',
                    id: -1,
                    wIndex: 4
                },
                ['screen-bottom-right']: {
                    name: '',
                    id: -1,
                    wIndex: 5
                }
            },
            ['screen3x3']: {
                ['screen-top-left']: {
                    name: '',
                    id: -1,
                    wIndex: 0
                },
                ['screen-top-center']: {
                    name: '',
                    id: -1,
                    wIndex: 1
                },
                ['screen-top-right']: {
                    name: '',
                    id: -1,
                    wIndex: 2
                },
                ['screen-center-left']: {
                    name: '',
                    id: -1,
                    wIndex: 3
                },
                ['screen-center-center']: {
                    name: '',
                    id: -1,
                    wIndex: 4
                },
                ['screen-center-right']: {
                    name: '',
                    id: -1,
                    wIndex: 5
                },
                ['screen-bottom-left']: {
                    name: '',
                    id: -1,
                    wIndex: 6
                },
                ['screen-bottom-center']: {
                    name: '',
                    id: -1,
                    wIndex: 7
                },
                ['screen-bottom-right']: {
                    name: '',
                    id: -1,
                    wIndex: 8
                }
            },
            ['screen4x4']: {
                ['one-one']: {
                    name: '',
                    id: -1,
                    wIndex: 0
                },
                ['one-two']: {
                    name: '',
                    id: -1,
                    wIndex: 1
                },
                ['one-three']: {
                    name: '',
                    id: -1,
                    wIndex: 2
                },
                ['one-four']: {
                    name: '',
                    id: -1,
                    wIndex: 3
                },
                ['two-one']: {
                    name: '',
                    id: -1,
                    wIndex: 4
                },
                ['two-two']: {
                    name: '',
                    id: -1,
                    wIndex: 5
                },
                ['two-three']: {
                    name: '',
                    id: -1,
                    wIndex: 6
                },
                ['two-four']: {
                    name: '',
                    id: -1,
                    wIndex: 7
                },
                ['three-one']: {
                    name: '',
                    id: -1,
                    wIndex: 8
                },
                ['three-two']: {
                    name: '',
                    id: -1,
                    wIndex: 9
                },
                ['three-three']: {
                    name: '',
                    id: -1,
                    wIndex: 10
                },
                ['three-four']: {
                    name: '',
                    id: -1,
                    wIndex: 11
                },
                ['four-one']: {
                    name: '',
                    id: -1,
                    wIndex: 12
                },
                ['four-two']: {
                    name: '',
                    id: -1,
                    wIndex: 13
                },
                ['four-three']: {
                    name: '',
                    id: -1,
                    wIndex: 14
                },
                ['four-four']: {
                    name: '',
                    id: -1,
                    wIndex: 15
                }
            },
            ['diy']: {
                ['screen-left']: {
                    name: '',
                    id: -1,
                    wIndex: 0
                },
                ['screen-right']: {
                    name: '',
                    id: -1,
                    wIndex: 1
                }
            }
        }
    }
}

