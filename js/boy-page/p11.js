function startP11S10(){
    document.querySelector(".p11__btn-1").addEventListener("click", function() {
        scene.next();
    })
}
function startP11S20(){
    document.querySelector(".p11__btn-2").addEventListener("click", function() {
        location.href = config.gameGirlUrl;
    })
}