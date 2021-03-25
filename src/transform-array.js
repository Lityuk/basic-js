const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let answer = [];
  let newArr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      delete newArr[i];
      newArr[i + 1] != undefined ? delete newArr[i + 1] : true;
    }

    if (arr[i] == "--discard-prev") {
      delete newArr[i];
      newArr[i - 1] != undefined ? delete newArr[i - 1] : true;
    }
    if (arr[i] == "--double-next") {
      delete newArr[i];
      newArr[i + 1] != undefined ? newArr.splice(i, 1, arr[i + 1]) : true;
    }
    if (arr[i] == "--double-prev") {
      delete newArr[i];
      newArr[i - 1] != undefined ? newArr.splice(i, 1, arr[i - 1]) : true;
    }
  }

  newArr.forEach((element) => {
    answer.push(element);
  });
  return answer;
};
