const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value == "undefined") {
      this.chain.push("()");
      return this;
    } else {
      this.chain.push(`( ${value} )`);
      return this;
    }
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position > this.chain.length ||
      position < 1
    ) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    // console.log(this.chain.reverse());
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let answer = this.chain.join("~~");
    this.chain = [];
    return answer;

    // return this.chain.join("~~");
  },
};

module.exports = chainMaker;
