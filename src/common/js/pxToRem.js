(function() {

    let computeRem = (function _computeRem() {
        let html = document.documentElement;
        let width = html.getBoundingClientRect().width;

        // 以1024px为分界线, 适应PC端与移动端
        if(width < 1024){
            html.style.fontSize = width/6 + 'px';
            html.setAttribute('flexiable-size', width/6);
        }else{
            html.style.fontSize = width/12 + 'px';
            html.setAttribute('flexiable-size', width/12);
        }
        
        return _computeRem
    })()

    window.onresize = function() {
        computeRem();
    }
})()