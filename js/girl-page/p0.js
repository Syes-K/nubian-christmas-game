function startP0() {
    var prize = myPrize;
    document.querySelectorAll(".p0-prize").forEach(function(el) {
        el.classList.add("none");
    })
    if (prize) {
        document.querySelector(".cover__btn-prize").classList.remove("none");
        if (prize.flag) {
            var prizeEl = document.querySelector(".p0-prize-" + prize.flag);
            if (prizeEl) {
                prizeEl.classList.remove("none")
            }
        }
        if (prize.code) {
            document.querySelector("#p0-prize-code").innerHTML = prize.code;
        }
    }
    document.querySelector(".cover__btn").addEventListener("click", function() {
        scene.next();
    })
    document.querySelector(".cover__btn-prize").addEventListener("click", function() {
        document.querySelector(".cover__prize-wrap").classList.remove("none");
    })
    document.querySelector(".cover__prize-btn").addEventListener("click", function() {
        document.querySelector(".cover__prize-wrap").classList.add("none");
    })
}