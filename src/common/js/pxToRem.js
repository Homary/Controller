/*动态计算px,折算成rem*/
 (function() {

    let computeRem = (function _computeRem() {
        let html = document.documentElement;
        let width = html.getBoundingClientRect().width;
        let multiple = Math.floor(width / 100);
        let fontMultiple = Math.floor(multiple / 10);

        html.style.fontSize = width/10 + 'px';
        html.setAttribute('flexiable-size', width/multiple);
        console.info(`%c 1rem = ${width/10}px`, 'color: deepskyblue');  
        return _computeRem
    })()

    window.onresize = function() {
        computeRem();
    }

})()