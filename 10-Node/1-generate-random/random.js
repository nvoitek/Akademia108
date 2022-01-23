function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomStr(length) {
    var result = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(getRandomInt(0, char.length));
    }

    return result;
}

function getRandomArr(min, max, length) {
    var result = [];

    for ( var i = 0; i < length; i++ ) {
      result.push(getRandomInt(min, max));
    }

    return result;
}

module.exports = {
    getRandomInt: getRandomInt,
    getRandomStr: getRandomStr,
    getRandomArr: getRandomArr
}