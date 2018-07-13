import {sendInstruction} from '@api/index';
import {SUC_CODE} from '@common/js/stateCode';

export function _sendInstruction(ins, key) {
console.log(ins, key)
    sendInstruction({"instruction": ins, "routingKey": key})
        .then(data => {
            if(data.errorcode !== SUC_CODE){
                if(data.msg){
                    alert(data.msg);
                }else{
                    alert('指令发送失败');
                }
            }else{
                console.log(`指令: ${ins} & ${key}发送成功`);
            }
        })
}