const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = String(str);

  if (!options.separator) {
    options.separator = "+";
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  if (options.addition !== undefined) {
    options.addition = String(options.addition);

    if (options.additionRepeatTimes) {
      result +=
        (options.addition + options.additionSeparator).repeat(
          options.additionRepeatTimes - 1
        ) +
        options.addition +
        options.separator;
    } else {
      result += options.addition + options.separator;
    }
  } else {
    result += options.separator;
  }

  if (options.repeatTimes) {
    result = result.repeat(options.repeatTimes);

    result = result.slice(0, result.length - options.separator.length);
  } else {
    result = result.slice(0, result.length - options.separator.length);
  }
  // console.log(result);
  return result;
};
