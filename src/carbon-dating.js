const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (sampleActivity <= 0 || sampleActivity >= 15 || typeof sampleActivity != "string" || !Number(sampleActivity))  {
    return false;
  }
  let time = Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2  / HALF_LIFE_PERIOD);
  return Number(Math.ceil(time));


};
