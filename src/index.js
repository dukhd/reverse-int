module.exports = function reverse(n) {
  const nStr = n.toString();
  const resultStr = nStr.split('').reverse().join('').replace(/-/g, '');
  return Number(resultStr);
};
