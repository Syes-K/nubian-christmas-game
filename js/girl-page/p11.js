function startP11S10(){
    girl.finishGame();
    document.querySelector(".p11__btn-1").addEventListener("click", function() {
        $.get(config.drawUrl, {
            openid: openid,
            sign: sign
        }).then(function(rs) {
            console.log(rs);
            // {"code":1,"msg":"","data":{"code":"N1Q2Y3","flag":"1"}}
            document.querySelector('.p11__btn-1').classList.add('none');

            // let s = [{
            //     code: 1,
            //     data: {
            //         flag: 1,
            //         code: '11'
            //     }
            // },{
            //     code: 2,
            //     data: {
            //         flag: 2,
            //         code: '12'
            //     }
            // },{
            //     code: 1,
            //     data: {
            //         flag: 3,
            //         code: '13'
            //     }
            // },{
            //     code: 1,
            //     data: {
            //         flag: 4,
            //         code: '14'
            //     }
            // }]
            // rs = s[1];
            
            if(rs.code == 0){
                // 未中奖
                document.querySelector('.p11__tips-1').classList.remove('none');
            } else if(rs.code == 1){
                if(!rs.data || !rs.data.flag) return;

                // 中奖
                document.querySelector('.p11__tips-2').classList.remove('none');

                //flag: 1：400元券 2：牛仔抱枕 3：耳机 4：Z17S
                let dom = document.querySelector('[data-flag="'+ rs.data.flag +'"]');
                let isCoupon = rs.data.flag == 1;

                if(rs.data.flag == 1){
                    $('.prize-coupon_text span').text('【 兑换码：' + rs.data.code + ' 】');
                } else {
                    $('.p11__prize-5 .prize-code').text(rs.data.code);
                }
                dom.classList.remove('none');

                dom.querySelector('.button').addEventListener('click', function(){
                    if(isCoupon){
                        location.href = config.mallUrl;
                    } else {
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
                            dom.classList.add('none');
                            document.querySelector('.p11__tips-success').classList.remove('none');
                        });
                    }
                })

            } else {rs.code == 2}{
                if(!rs.data || !rs.data.flag) return;
                
                let dom = $('[data-flag="1"]'); 
                if(rs.data.flag == 1){
                    dom.find('.prize-coupon_text span').text('【 兑换码：' + rs.data.code + ' 】');
                } else {
                    dom = $('.p11__prize-5');
                    dom.find('.prize-code').text(rs.data.code);
                    $('.p11__tips-2').removeClass('none');
                }   

                dom.removeClass('none'); 
            }
        });
    })

    document.querySelector('.p11__tips-success .tips-close').addEventListener('click', function() {
        document.querySelector('.p11__tips-success').classList.add('none');  
        document.querySelector('.p11__prize-5').classList.remove('none');  
    })

    document.querySelector('.p11__prize-5 .button').addEventListener('click', function() {
        location.href = config.mallUrl;
    })
}
function startP11S20(){
    document.querySelector(".p11__btn-2").addEventListener("click", function() {
        location.href = config.gameGirlUrl;
    })
}
