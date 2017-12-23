function startP0() {
    var prize = myPrize;
    if (prize && prize.code) {
        document.querySelector(".cover__btn-prize").classList.remove("none");
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