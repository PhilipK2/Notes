"use strict";
var expect = require("chai").expect;

const disemvowel = ((str) => {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/ig, "");
});

module.exports = disemvowel;


describe("Test Case 1", function(){
  describe("Test Case 2", function(){
    describe("test Case 3", function(){
      it("disembowling K-man", function(){
        expect(disemvowel("Kenneth")).to.equal("Knnth");
      });
      it("K-man with numbers", function(){
        expect(disemvowel("Kenneth 645")).to.equal("Knnth 645");
      });
      it("just numbers", function(){
        expect(disemvowel("645")).to.equal("645");
      });
    });
  });
});