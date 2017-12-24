function startP11S10(){
    document.querySelector(".p11__btn-1").addEventListener("click", function() {
        $.get(config.drawUrl, {
            openid: openid,
            sign: sign
        }).then(function(rs) {
            console.log(data);
            // {"code":1,"msg":"","data":{"code":"N1Q2Y3","flag":"1"}}

            if(rs.code === 1){
                // 中奖
                //flag: 1：400元券 2：牛仔抱枕 3：耳机 4：Z17S
                let dom = document.querySelector('[data-'+ flag +']');

                if(rs.data.flag == 1){
                    dom.querySelector('.prize-coupon_text span').text('【 兑换码：' + rs.data.code + ' 】');
                }
                dom.classList.remove('none');
            }
        });
    })
}
function startP11S20(){
    document.querySelector(".p11__btn-2").addEventListener("click", function() {
        location.href = config.gameGirlUrl;
    })
}