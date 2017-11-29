var expect = require("chai").expect;


function sub(x,y){
    return x-y;
}

describe("JUNK TEST", function(){
    it("3+4 is 7", function(){
        expect(3+4).to.equal(7);
    });
    it("my sub function works", function(){
        expect(sub(3,1)).to.equal(2);
    });
});
