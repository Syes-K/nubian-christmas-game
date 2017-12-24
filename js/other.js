//------------------ 横竖屏判断 --------------
var orientLayer = document.getElementById("orientLayer");
//判断横屏竖屏
function checkDirect() {
    if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {
        return "portrait";
    } else {
        return "landscape";
    }
}
//显示屏幕方向提示浮层
function orientNotice() {
    var orient = checkDirect();
    if (orient == "portrait") {
        orientLayer.style.display = "none";
    } else {
        orientLayer.style.display = "block";
    }
}

function printInit() {
    orientNotice();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        setTimeout(orientNotice, 200);
    })
}
printInit();


//------------------ 分享 --------------
function getWxShareData() {
    return {
        'img_url': config.wxshareImg,
        'title': config.wxshareTitle,
        'link': config.wxshareUrl,
        'desc': config.wxshareDesc
    };
}

function getWxShareMomentData() {
    return {
        'img_url': config.wxshareImg,
        'title': config.wxshareDesc,
        'link': config.wxshareUrl,
        'desc': config.wxshareDesc
    };
}

var bindit = function () {
    // 发送给好友;
    WeixinJSBridge.on('menu:share:appmessage', function () {
        WeixinJSBridge.invoke('sendAppMessage', getWxShareData(), function (r) { });
    });
    // 分享到朋友圈;
    WeixinJSBridge.on('menu:share:timeline', function () {
        WeixinJSBridge.invoke('shareTimeline', getWxShareMomentData(), function (r) { });
    });
};

document.addEventListener('WeixinJSBridgeReady', bindit, false);