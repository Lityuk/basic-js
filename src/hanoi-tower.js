const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let steps = Math.pow(2, disksNumber) - 1;
  return (answer = {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.floor((3600 * steps) / turnsSpeed),
  });
};
