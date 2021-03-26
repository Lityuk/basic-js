const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    arr.forEach((element) => {
      let adder = 1;
      if (Array.isArray(element)) {
        adder += this.calculateDepth(element);
      }
      adder > count ? (count = adder) : true;
    });

    // console.log(count);
    return count;
  }
};