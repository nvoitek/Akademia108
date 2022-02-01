function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomStr(length) {
  let result = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for ( let i = 0; i < length; i++ ) {
      result += chars.charAt(getRandomInt(0, chars.length));
    }

    return result;
}

function getRandomArr(min, max, length) {
    let result = [];

    for ( let i = 0; i < length; i++ ) {
      result.push(getRandomInt(min, max));
    }

    return result;
}

module.exports = {
    getRandomInt: getRandomInt,
    getRandomStr: getRandomStr,
    getRandomArr: getRandomArr
}