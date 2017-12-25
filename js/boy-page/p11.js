function startP11S10(){
    boy.finishGame();
    document.querySelector(".p11__tips-1 .button").addEventListener("click", function() {
        // location.href = config.gameGirlUrl;
        var currentHref = window.location.href.replace("boy", "girl");
        currentHref = currentHref.replace(/\?[\s\S]*/, "");
        window.location = currentHref;
    })
}