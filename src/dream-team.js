const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let arr = members.map(function (element) {
    if (typeof element != "string") {
      return;
    } else if (element[0] == " ") {
      element = element.trim();
    } else console.log(element);

    return element[0];
  });

  return arr.join("").toUpperCase().split("").sort().join("") || false;
};
