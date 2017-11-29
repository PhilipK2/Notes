
var expect = require("chai").expect;

function mult(x,y){
    if (typeof x !== "number" || typeof y !== "number") {
        throw "STRING NOT ACCEPTED";
      }
    return x*y;
}

describe("My test cases level 1", function(){
    describe("My test cases level 2", function(){
        it("basic test of mult function with integers", function(){
        //we do the test
        expect(mult(3,4)).to.equal(12);
         });
         it("mult of negative integers", function(){
             expect(mult(-3,-8)).to.equal(24);
         });
         it("mult with strings should throw err", function(){
            expect(function(){mult("str", 78)}).to.throw("STRING NOT ACCEPTED");
         });
    });
});

