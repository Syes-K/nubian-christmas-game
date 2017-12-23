setElement();

window.onload = function() {
    resetTop();
    music('bgm');
};

window.onresize = function() {
    resetTop();
    setElement();
};

//指定阻止滑动触摸等
document.addEventListener("touchmove", function(event) {
    event.preventDefault();
})


/**
 * 宽度计算基准字体大小
 */
function setElement(width) {
    var clientWidth = width || document.documentElement.clientWidth;
    scale = clientWidth / 320,
        fontSize = Math.ceil(scale * 100);

    if (scale < 1) {
        fontSize = 100;
    } else if (scale > 2) {
        fontSize = 200;
    }

    document.documentElement.setAttribute("style", "font-size: " + fontSize + "px")
}


/**
 * 重置元素Top
 */
function resetTop(height) {
    var clientHeight = height || document.documentElement.clientHeight;
    scale = clientHeight / 1040,
        resetTopDoms = document.querySelectorAll('[data-top]'),
        max = resetTopDoms.length;

    if (scale !== 1) {
        resetTopDoms.forEach(dom => {
            let top = dom.dataset.top;
            if (top) {
                dom.style.top = parseFloat(top) * scale + 'px';
                // console.log(dom);
            }
        })
    }
}

/**
 * 大屏适配小屏
 */
function resetSize(width, height){
    setElement(width);
    resetTop(height);

    let wrap = document.querySelector('.warp');
    wrap.style.width = width + 'px';
    wrap.style.height = height + 'px';
}

/**
 * 音乐
 */
function music(musicName) {
    var bgm;
    var mList = {};
    var play = false;
    var musicDom = document.getElementById('music').querySelector('.music');

    musicDom.onclick = function(){
        if (typeof(musicB) != "undefined") {
            clearInterval(musicB);
        }
        if (play) {
            musicDom.classList.remove("play");
            bgm.pause();
            play = false;
        } else {
            musicDom.classList.add("play");
            bgm.play();
            play = true;
        }
    }

    if (is_weixn()) {
        if (typeof(wx) == "object") {
            wx.ready(function() {
                getMusic(musicName);
            })
        } else {
            document.addEventListener("WeixinJSBridgeReady", function() {
                getMusic(musicName);
            }, false);
        }
    } else {
        getMusic(musicName);
    }

    function getMusic(type) {
        bgm = new Audio();
        bgm.src = "bgm/" + type + ".mp3";
        bgm.loop = "loop";
        bgm.play();
        musicA = setInterval(function() {
            if (bgm.currentTime != 0) {
                clearInterval(musicA);
                musicDom.style.visibility = 'visible';
                musicDom.style.opacity = 1;
                play = true;
            }
        }, 100)
    }

    function playMusic(obj) {
        if (typeof(musicB) != "undefined") {
            clearInterval(musicB);
        }
        for (var key in mList) {
            eval("mList." + key + ".currentTime = 0");
            eval("mList." + key + ".pause()");
        }
        eval("mList." + obj + ".play()");
        if (play) {
            musicB = setInterval(function() {
                if (eval("mList." + obj + ".paused")) {
                    clearInterval(musicB);
                    bgm.play();
                }
            }, 100)
        }
    }
}


//识别系统及客户端
function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
