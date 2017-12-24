function startP11S10(){
    document.querySelector(".p11__btn-1").addEventListener("click", function() {
        $.get(config.drawUrl, {
            openid: openid,
            sign: sign
        }).then(function(rs) {
            console.log(rs);
            // {"code":1,"msg":"","data":{"code":"N1Q2Y3","flag":"1"}}

            if(rs.code == 0){
                // 未中奖
                document.querySelector('.p11__tips-1').classList.remove('none');
            } else if(rs.code == 1){
                // 中奖
                document.querySelector('.p11__tips-2').classList.remove('none');

                //flag: 1：400元券 2：牛仔抱枕 3：耳机 4：Z17S
                let dom = document.querySelector('[data-'+ rs.data.flag +']');

                if(rs.data.flag == 1){
                    dom.querySelector('.prize-coupon_text span').text('【 兑换码：' + rs.data.code + ' 】');
                }
                dom.classList.remove('none');

                dom.querySelector('.button').addEventListener('click', function(){
                    let name = dom.querySelector('input[name="name"]').value,
                        tel = dom.querySelector('input[name="tel"]').value;

                    if(!name || !tel) {
                        alert('请填写正确!')
                        return false;
                    }

                    //设置用户信息
                    $.get(config.setInfo, {
                        openid: openid,
                        sign: sign,
                        name: name,
                        tel: tel
                    }).then(function(data) {
                        document.querySelector('.p11__tips-success').classList.remove('none');
                    });
                })

            } else {rs.code == 2}{
                
            }
        });
    })

    document.querySelector('.p11__tips-success .tips-close').addEventListener('click', function() {
        document.querySelector('.p11__tips-success').classList.add('none');  
        document.querySelector('.p11__prize-1').classList.remove('none');  
    })
}
function startP11S20(){
    document.querySelector(".p11__btn-2").addEventListener("click", function() {
        location.href = config.gameGirlUrl;
    })
}