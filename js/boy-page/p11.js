function startP11S10(){
    boy.finishGame();
    document.querySelector(".p11__btn-1").addEventListener("click", function() {
        location.href = config.gameGirlUrl;
    })
}