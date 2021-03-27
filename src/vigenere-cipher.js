const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }

  encrypt(string, keyCode) {
    if (string == undefined || keyCode == undefined) {
      throw new Error("Source data missing");
    }
    let result = "";
    let counter = 0;
    string = string.toUpperCase();
    keyCode = keyCode.toUpperCase();

    for (let elementIndex in string) {
      // console.log(result);
      if (
        string.charCodeAt(elementIndex) < 65 ||
        string.charCodeAt(elementIndex) > 90
      )
        result += string[elementIndex];
      else {
        result += String.fromCharCode(
          ((string.charCodeAt(elementIndex) +
            keyCode.charCodeAt(counter % keyCode.length) -
            130) %
            26) +
            65
        );
        counter++;
      }
    }

    // console.log(result);
    if (this.value == undefined) {
      return result;
    }
    return this.value ? result : result.split("").reverse().join("");
  }

  decrypt(string, keyCode) {
    if (string == undefined || keyCode == undefined) {
      throw new Error("Source data missing");
    }
    let result = "";
    let counter = 0;
    string = string.toUpperCase();
    keyCode = keyCode.toUpperCase();

    for (let elementIndex in string) {
      // console.log(result);
      if (
        string.charCodeAt(elementIndex) < 65 ||
        string.charCodeAt(elementIndex) > 90
      )
        result += string[elementIndex];
      else {
        result += String.fromCharCode(
          ((string.charCodeAt(elementIndex) -
            keyCode.charCodeAt(counter % keyCode.length) +
            26) %
            26) +
            65
        );
        counter++;
      }
    }

    // console.log(result);
    if (this.value == undefined) {
      return result;
    }
    return this.value ? result : result.split("").reverse().join("");
  }

  // console.log(result);
}

module.exports = VigenereCipheringMachine;
