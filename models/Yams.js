module.exports = class Yams {
  constructor(gameArray, collectionArray) {
    this.statistics = this.initStatistic();
    this.gameArray = gameArray;
    this.collectionArray = collectionArray;
  }

  initStatistic() {
    let statistics = [];
    var labels = [
      "Ones",
      "Twos",
      "Threes",
      "Fours",
      "Fives",
      "Sixes",
      "Sum",
      "Bonus",
      "Threes of kind",
      "Four of a kind",
      "Full House",
      "Small straight",
      "Large straight",
      "Chance",
      "YAHTZEE",
      "TOTAL SCORE",
    ];

    labels.map((label) => {
      statistics[label] = null;
    });

    return statistics;
  }

  rollDice() {
    this.gameArray = this.gameArray.map((de) => {
      de = Math.floor(Math.random() * (6 - 1)) + 1;
      return de;
    });
  }

  keepDice(keepValuerray) {
    this.gameArray.map((des) => {
      if (keepValuerray.includes(des)) {
        // delete la valeur du game array
        this.gameArray.splice(this.gameArray.indexOf(des), 1);
        // ajout la valeur aux arrayCollection
        this.collectionArray.push(des);
      }
    });
  }

  updateStatistics(label) {
    let count = 0;

    this.collectionArray.map((de) => {
      count += de;
    });

    this.statistics[label] = count;
  }
};
