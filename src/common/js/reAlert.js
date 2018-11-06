(function(){
    window.alert = function(str){
            var shield = document.createElement("DIV");

            shield.id = "shield";
            shield.style.position = "absolute";
            shield.style.left = "0";
            shield.style.top = "0";
            shield.style.width = "100%";
            shield.style.height = "100%";
            shield.style.backgroundColor = "rgba(0, 0, 0, .4)";
            shield.style.zIndex = "25";

            var alertFram = document.createElement("DIV");

            alertFram.id="alertFram";
            alertFram.style.position = "absolute";
            alertFram.style.width = "280px";
            alertFram.style.height = "150px";
            alertFram.style.left = "50%";
            alertFram.style.top = "50%";
            alertFram.style.marginLeft = "-140px";
            alertFram.style.marginTop = "-110px";
            alertFram.style.textAlign = "center";
            alertFram.style.lineHeight = "150px";
            alertFram.style.zIndex = "300";

            var strHtml;

            strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
            strHtml += " <li style=\"background:#C87400;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;height:25px;line-height:25px;border:1px solid #F9CADE;color:white\">提示</li>\n";
            strHtml += " <li style=\"background:#fff;text-align:center;font-size:12px;height:95px;line-height:95px;border-left:1px solid #F9CADE;border-right:1px solid #F9CADE;color:#313131\">"+str+"</li>\n";
            strHtml += " <li onclick=\"doOk()\" style=\"background:#fff;text-align:center;font-weight:bold;height:30px;line-height:25px; font-size:14px; color:#313131; cursor: pointer;\"><span style=\"width: 80px; height: 25px; background-color: #313131; color: #FFF;display:inline-block;\">确定</span></li>\n";
            strHtml += "</ul>\n";

            alertFram.innerHTML = strHtml;
            document.body.appendChild(alertFram);
            document.body.appendChild(shield);
            window.doOk = function(){
                alertFram.style.display = "none";
                shield.style.display = "none";
            }
            alertFram.focus();
            document.body.onselectstart = function(){return false;};
        }
})()