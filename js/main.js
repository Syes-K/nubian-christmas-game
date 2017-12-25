let currentWidth, currentHeight;

setElement();

window.config = {
    // gameGirlUrl: "http://122.114.149.227/nubiya/girl.html",
    // gameBoyUrl: "http://122.114.149.227/nubiya/boy.html",
    mallUrl: "https://www.nubia.com/active/happynewyear1.html",
    wxshareImg: 'http://122.114.149.227/nubiya/images/share-icon.png',
    wxshareTitle: "妙龄少女深夜独闯宅男卧室欲行凶，原因竟是……",
    wxshareDesc: "一个因为边框引发的圣诞劫！",
    wxshareUrl: "http://122.114.149.227/nubiya",

    //接口地址
    drawUrl: "http://case.html5case.cn/Nubia/prize", // 抽奖地址
    setInfo: "http://case.html5case.cn/Nubia/submit"
}


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
function setElement() {
    var clientWidth = document.documentElement.clientWidth,
        currWidth = currentWidth || clientWidth;

    scale = currWidth / 320,
        fontSize = Math.ceil(scale * 100);

    if (scale < 1) {
        fontSize = 100;
    } else if (scale > 2) {
        fontSize = 200;
    }

    document.documentElement.setAttribute("style", "font-size: " + fontSize + "px");
}


/**
 * 重置元素Top
 */
function resetTop() {
     var clientHeight = document.documentElement.clientHeight,
        currHeight = currentHeight || clientHeight;


    scale = currHeight / 1040,
        resetTopDoms = document.querySelectorAll('[data-top]'),
        max = resetTopDoms.length;

    if (scale !== 1) {
        resetTopDoms.forEach(dom => {
            let top = dom.dataset.top;
            if (top) {
                dom.style.top = parseFloat(top) * scale + 'px';
            }
        })
    }
}

/**
 * 大屏适配小屏
 */
function resetSize(width, height){
    let wrap = document.querySelector('.warp');
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;

    currentWidth = Math.min(width, clientWidth);
    currentHeight = Math.min(height, clientHeight);

    wrap.style.width = currentWidth + 'px';
    wrap.style.height = currentHeight + 'px';
    
    setElement();
    resetTop();
}

/**
 * 音乐
 */
let bgm;
let bgmSwitch = false;
function music(musicName) {
    if(bgm) {
        bgm.src = "bgm/" + musicName + ".mp3";

        if(bgmSwitch){
            bgm.play();
        }
        return;
    }

    // var bgm;
    var mList = {};
    var musicDom = document.getElementById('music').querySelector('.music');

    musicDom.onclick = function(){
        if (typeof(musicB) != "undefined") {
            clearInterval(musicB);
        }
        if (bgmSwitch) {
            musicDom.classList.remove("play");
            bgm.pause();
            bgmSwitch = false;
        } else {
            musicDom.classList.add("play");
            bgm.play();
            bgmSwitch = true;
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
        bgm.id="dgm";
        bgm.src = "bgm/" + type + ".mp3";
        bgm.loop = "loop";
        bgm.play();
        musicA = setInterval(function() {
            if (bgm.currentTime != 0) {
                clearInterval(musicA);
                musicDom.style.visibility = 'visible';
                musicDom.style.opacity = 1;
                bgmSwitch = true;
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
        if (bgmSwitch) {
            musicB = setInterval(function() {
                if (eval("mList." + obj + ".paused")) {
                    clearInterval(musicB);
                    bgm.play();
                }
            }, 100)
        }
    }
}


/**
 * 动态添加音频
 */
function addMusic(muscic) {
    var sound = new Audio();  
    //选择文件  
    sound.src = "bgm/" + muscic + ".mp3";
    //播放  

    if(bgmSwitch){
        sound.play();
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
