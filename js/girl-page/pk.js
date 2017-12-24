var attackStatusElement = [
    ".girl-9",
    ".girl-10",
    ".girl-13"
];

function startPk() {
    // music('pk')
    var lastClickTime;
    var pkAnimateTimer;
    var i = 1;

    document.querySelector(".pk-btn").addEventListener("click", function() {
        var currentTime = (new Date()).getTime();
        if (!lastClickTime) {
            document.querySelector(".pk-cat-tips").classList.remove("none");
            attackStatus(attackStatusElement[i % 3]);
            i++;
            pkAnimateTimer = setInterval(function() {
                attackStatus(attackStatusElement[i % 3]);
                i++;
            }, 2000);
            lastClickTime = (new Date()).getTime();
        } else {
            if (currentTime - lastClickTime < 300) {
                return;
            } else {
                girl.attack();
                lastClickTime = (new Date()).getTime();
            }
        }

    });
    var pk_health_bar = document.getElementById("pk_health_bar");
    girl.startPk();
    girl.on("lostHealth", function(health) {
        pk_health_bar.style.width = health + "%";
    });
    girl.on("KO", function() {
        clearInterval(pkAnimateTimer);
        document.querySelector(".pk-ko").classList.remove("none");
        attackStatus(attackStatusElement[0]);
        // todo
        setTimeout(function() {
            scene.next();
        }, 2000)
    });
}

function attackStatus(elSelector) {
    attackStatusElement.forEach(function(el) {
        document.querySelector(el).classList.add("none");
    })
    document.querySelector(elSelector).classList.remove("none");
}