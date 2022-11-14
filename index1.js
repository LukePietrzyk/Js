'use strict';

let temperature = {
  testData1: [17, 21, 23],
  testData2: [12, 5, -5, 4],
  printForecast: function () {
    for (let i = 0; i < this.testData1.length; i++) {
      let x = '';
      this.txt += x + '... ' + this.testData1[i] + `C in ${Number(i) + 1} days`;
    }
    for (let i = 0; i < this.testData2.length; i++) {
      let x = '';
      this.txt += x + '... ' + this.testData2[i] + `C in ${Number(i) + 1} days`;
    }
  },
};

temperature.printForecast();

console.log(temperature.txt + ' ...');
