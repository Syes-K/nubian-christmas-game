function startLoding() {
    var percent = 0;
    var getted = false;
    var timer = setInterval(function() {
        percent += 10;
        if (percent >= 100) {
            if (boy.girlSize) {
                percent = 100;
                clearInterval(timer);
                finishLoading();
            } else {
                percent = 99;
            }

        }
        $("#loading-percent").html(percent + '%');
    }, 100);
}

function finishLoading() {
    setTimeout(function() {
        scene.next();
    }, 200);
}