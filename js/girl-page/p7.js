function startP7S10() {
    var texts = "可算找到";
    var dom = document.getElementById("p7_s10");
    inputP7Text(texts, dom, function() {
        scene.finish(scene.currentScene);
    });
}

function startP7S30() {
    var texts = "该死的边";
    var dom = document.getElementById("p7_s30");
    inputP7Text(texts, dom, function() {
        scene.finish(scene.currentScene);
    });
}

function startP7S50() {
    var texts = "害得我出了那";
    var dom = document.getElementById("p7_s50");
    inputP7Text(texts, dom, function() {
        scene.finish(scene.currentScene);
    });
}
function startP7S70() {
    var texts = "糗死了～";
    var dom = document.getElementById("p7_s70");
    inputP7Text(texts, dom, function() {
        scene.finish(scene.currentScene);
    });
}

function inputP7Text(texts, dom, callback) {
    var idx = 0;
    var timer = setInterval(function() {
        dom.innerHTML += '<span>' + texts[idx] + '</span>';
        idx++;
        if (idx >= texts.length) {
            clearInterval(timer);
            callback();
        }
    }, keyTime);
}