module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.map(elem => elem.join(''));
    while (arr.some(elem => str.includes(elem)) ) {
      for (let i = 0; i < arr.length; i++) {
        do {
          str = str.replace(arr[i], '');
        } while (str.indexOf(arr[i]) != -1);
      }
    }
  return str.length == 0 ? true : false;
}
