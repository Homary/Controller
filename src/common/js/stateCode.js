/*状态码*/
    export const SUC_CODE = "1000";             // 成功
    export const ERR_GET_USER_INFO = "1002";    // 读取用户消息失败
    export const ERR_GET_SYSTEM_INFO = "1100";  // 获取系统列表信息失败
    export const ERR_GET_SCREEN_INFO = "1200";  // 获取分屏列表信息失败
    export const ERR_SAVE_PLAN_INFO = "1300";   // 保存预案信息失败
    export const ERR_PLAN_MAX_LENGTH = "1301";  // 预案数量超过限制    
    export const ERR_GET_PLAN_LIST = "1400";    // 获取预案列表信息失败
    export const ERR_LOGIN_ERR = "1500";        // 登录失败
    export const ERR_USER_PASS = "1501";        // 用户名或密码错误
    export const ERR_QUIT = "1600";             // 用户退出系统异常
    export const ERR_ORIGIN_PASS = "1700";      // 原密码错误
    export const ERR_CHECK_PASS = "1701";       // 密码修改失败
    export const ERR_CONNECT_SERVER = "1800";   // 消息队列服务器连接异常
    export const ERR_SENT_ORDER = "1801";       // 指令发送失败
    export const ERR_GET_TS = "1900";           // 获取暂存数据失败