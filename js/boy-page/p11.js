function startP11S10(){
    boy.finishGame();
    document.querySelector(".p11__tips-1 .button").addEventListener("click", function() {
        location.href = config.gameGirlUrl;
    })
}