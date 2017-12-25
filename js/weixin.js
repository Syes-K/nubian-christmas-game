// 微信userinfo配置项。
window.userInfo_config = {
    wxOut: true,
    shareClean: true,
    saveAs: 'case1'
}

// 获取用户的openid，如果没有的话  就自动生成一个（测试用）
function getOpenid() {
    var id;
    if (window.h6app_userInfo && window.h6app_userInfo.openid) {
        id = window.h6app_userInfo.openid;
    }
    return id || randomUuid();
}
// 获取用户的sign，如果没有的话  就自动生成一个（测试用）
function getSign() {
    var id;
    if (window.h6app_userInfo && window.h6app_userInfo.sign) {
        id = window.h6app_userInfo.sign;
    }
    return id || randomUuid();
}