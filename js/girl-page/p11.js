function startP11S10(){
    document.querySelector(".p11__btn-1").addEventListener("click", function() {
        let openid = girl.openId,
            sign = girl.sign;

        jQUery.get(config.drawUrl + '?openid=' + openid + '&sign=' + sign, function(result){
            console.log(result);
            // result: {"code":1,"msg":"openid 无效"}
            
        })
    })
}
function startP11S20(){
    document.querySelector(".p11__btn-2").addEventListener("click", function() {
        location.href = config.gameGirlUrl;
    })
}