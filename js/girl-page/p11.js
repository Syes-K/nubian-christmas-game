function startP11S10(){
    document.querySelector(".p11__btn-1").addEventListener("click", function() {
        // jQuery.post(config.drawUrl, {
        //     suggest:txt
        // },function(result){
        //     console.log(result);
        //     // scene.next();
        // });
        scene.next();
    })
}
function startP11S20(){
    document.querySelector(".p11__btn-2").addEventListener("click", function() {
        location.href = config.gameGirlUrl;
    })
}