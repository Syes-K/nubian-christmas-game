function startLoding() {
    var percent = 0;
    var getted = false;
    var timer = setInterval(function() {
        percent += 10;
        if (percent >= 100) {
            percent = 100;
            clearInterval(timer);
            finishLoading();
        }
        $("#loading-percent").html(percent + '%');
    }, 100);
}

function finishLoading() {
    setTimeout(() => {
        scene.next();
    }, 1000);
}