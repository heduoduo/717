export function getCookie (name) {
    var str = document.cookie;

    var cookieArr = str.split('; ');
    var value;
    // console.log(cookieArr);
    cookieArr.forEach((v, i) => {
        var tmpArr = v.split('=');
        if (tmpArr[0] === name) {
            value = tmpArr[1];
        }
    });

    return value;
}
export function setCookie (key, value) {
    document.cookie = key + '=' + value;
}

export function delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval !== null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    }
}