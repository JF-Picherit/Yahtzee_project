chai = require("chai");
Yams = require("../models/Yams");

describe("Yams TDD", () => {
  // var expect = chai.expect;
  chai.should();

  it("RollDice", () => {
    yams = new Yams([0, 0, 0, 0, 0], []);
    yams.rollDice();
    yams.gameArray.should.have.lengthOf(5);
    yams.gameArray.should.not.be.deep.equal([0, 0, 0, 0, 0]);
  });

  it("KeepDice", () => {
    yams = new Yams([2, 3, 4, 5, 4], []);
    yams.keepDice([4, 4]);
    yams.gameArray.length.should.equal(3);
    yams.gameArray[0].should.equal(2);
    yams.gameArray[1].should.equal(3);
    yams.gameArray[2].should.equal(5);
    yams.collectionArray.length.should.equal(2);
    yams.collectionArray.should.be.deep.equal([4, 4]);
  });

  it("updateStatistics", () => {
    yams = new Yams([2, 3, 5], [4, 4]);
    yams.updateStatistics("Fours");
    yams.statistics["Fours"].should.equal(8);
  });
});
