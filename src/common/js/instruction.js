import {sendInstruction} from '@api/index';
import {SUC_CODE} from '@common/js/stateCode';

export function _sendInstruction(ins, key) {
    sendInstruction({"instruction": {
        "target": ins.target,
        "action": ins.action,
        "params": {}
    }, "routingKey": key})
        .then(data => {
            if(data.errorcode !== SUC_CODE){
                if(data.msg){
                    alert(data.msg);
                }else{
                    console.log('指令发送失败');
                }
            }else{
                console.log(`指令: 发送成功`);
            }
        })
}