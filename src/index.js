module.exports = function check(str, bracketsConfig) {
  const isEmpty = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
      const open = bracketsConfig[j][0];
      const close = bracketsConfig[j][1];

      if (char === open) {
        if (open === close && isEmpty[isEmpty.length - 1] === char) {
          isEmpty.pop();
        } else {
          isEmpty.push(char);
        }
      } else if (char === close) {
        if (isEmpty.length === 0 || isEmpty.pop() !== open) {
          return false;
        }
      }
    }
  }

  return isEmpty.length === 0;
}
