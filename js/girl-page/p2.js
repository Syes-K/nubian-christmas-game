function startP2() {
    document.querySelectorAll("#p2 .close").forEach(function(el) {
        el.addEventListener("click", function() {
            closeTip()
        })
    });
    document.querySelectorAll(".p2-next-scene").forEach(function(el) {
        el.addEventListener("click", function() {
            scene.next();
        })
    });


    // 闪动后，绑定点击事件
    var clikToolList = [];
    document.querySelector("#p2 .p2__tips-6 .close").addEventListener("click", function() {
        document.querySelector("#p2 .p2__tips").classList.add("none");
        document.querySelector("#p2 .p2__tips-6").classList.add("none");
        document.querySelector("#p2 .p2__prop-1").classList.add("shake");
        document.querySelector("#p2 .p2__prop-2").classList.add("shake");
        document.querySelector("#p2 .p2__prop-3").classList.add("shake");

        document.querySelectorAll("#p2 [tool]").forEach(function(el) {
            el.addEventListener("click", function() {
                var tool = el.getAttribute("tool");
                if (clikToolList.indexOf(tool) < 0) {
                    clikToolList.push(tool);
                }
                showTip('[tool-tip="' + tool + '"]');
            });
        });
    });

    document.querySelector("#p2 .p2__phone.light").addEventListener("click", function() {
        scene.next();
    });



    function showTip(selector) {
        document.querySelector("#p2 .p2__tips").classList.remove("none");
        document.querySelectorAll("#p2 .p2__tips>*").forEach(function(el) {
            el.classList.add("none");
        });
        document.querySelector("#p2 .p2__tips>" + selector).classList.remove("none");
    }

    function closeTip() {
        document.querySelector("#p2 .p2__tips").classList.add("none");
        document.querySelectorAll("#p2 .p2__tips>*").forEach(function(el) {
            el.classList.add("none");
        });
        if (clikToolList.length === 3) {
            scene.next();
        }
    }
}

function startP2S70() {
    window.socket = io.connect('http://115.159.69.89:3002');
    girl.connect(window.socket);
    var qrcode = new QRCode(document.getElementById("qr-code"), {
        width: 100,
        height: 100
    });
    var currentHref = window.location.href;
    var boyHref = window.location.href.replace("girl", "boy");
    boyHref = boyHref.replace(/\?[\s\S]*/, "");
    boyHref += "?fxzid=" + girl.id;
    qrcode.makeCode(boyHref);
}