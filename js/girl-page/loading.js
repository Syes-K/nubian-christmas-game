function startLoding() {
    var percent = 0;
    var getted = false;
    var timer = setInterval(function() {
        percent += 10;
        if (percent >= 100) {
            if (getted) {
                percent = 100;
                finishLoading();
            } else {
                percent = 99;
            }
            clearInterval(timer);
        }
        $("#loading-percent").html(percent + '%');
    }, 100);
    $.get('http://case.html5case.cn/Nubia/getMyPrize', {
        openid: openid,
        sign: signid
    }).then(function(data) {
        if (percent >= 90) {
            clearInterval(timer);
            percent = 100;
            $("#loading-percent").html(percent + '%');
            finishLoading();
        }
        getted = true;
        if (data.code == 1) {
            window.myPrize = data.data;
        } else {
            window.myPrize = null;
        }
    });
}

function finishLoading() {
    setTimeout(() => {
        scene.next();
    }, 1000);
}