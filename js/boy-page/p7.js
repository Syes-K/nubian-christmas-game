function startP7S20() {
    var texts = "我的阿吉";
    var dom = document.getElementById("p7_s20");
    inputP7Text(texts, dom, function() {
        scene.finish(scene.currentScene);
    });
}

function startP7S40() {
    var texts = [
        "(qiang)",
        "框",
        "(bi)"
    ];
    var dom = document.getElementById("p7_s40");
    inputP7Text(texts, dom, function() {
        scene.finish(scene.currentScene);
    });
}

function startP7S60() {
    var texts = "么大的误会";
    var dom = document.getElementById("p7_s60");
    inputP7Text(texts, dom, function() {
        scene.finish(scene.currentScene);
    });
}

function startP7S80() {
    var texts = [
        "o",
        "(TヘTo)"
    ];
    var dom = document.getElementById("p7_s80");
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