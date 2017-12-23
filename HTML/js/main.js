setElement();

window.onload = function() {
    resetTop();
};

window.onresize = function() {
    resetTop();
    setElement();
};


/**
 * 宽度计算基准字体大小
 */
function setElement() {
    var clientWidth = document.documentElement.clientWidth;
        scale = clientWidth / 320,
        fontSize = Math.ceil(scale * 100);
    
    if(scale < 1){
        fontSize = 100;
    } else if (scale > 2) {
        fontSize = 200;
    }

    document.documentElement.setAttribute("style", "font-size: " + fontSize + "px")
}


/**
 * 重置元素Top
 */
function resetTop() {
    var clientHeight = document.documentElement.clientHeight;
        scale = clientHeight / 1040,
        resetTopDoms = document.querySelectorAll('[data-top]'),
        max = resetTopDoms.length;

    if(scale !== 1){
        resetTopDoms.forEach(dom => {
            let top = dom.dataset.top;
            if (top) {
                dom.style.top = parseFloat(top) * scale + 'px';
                console.log(dom);
            }
        })
    }
}