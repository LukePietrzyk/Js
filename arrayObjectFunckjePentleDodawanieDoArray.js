'use strict';

let totalsToPay = {
  bills: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
  tips: [],
  totalCostTB: [],

  calTip: function () {
    for (let i = 0; i < this.bills.length; i++) {
      if (this.bills[i] > 50 && this.bills[i] < 300) {
        this.tip = this.bills[i] * 0.15;
        totalsToPay.tips.push(this.tip);
      } else {
        this.tip = this.bills[i] * 0.2;
        totalsToPay.tips.push(this.tip);
      }
    }
  },

  totalCost: function () {
    for (let i = 0; i < this.bills.length; i++) {
      this.total = this.tips[i] + this.bills[i];
      this.totalCostTB.push(this.total);
    }
  },
};

totalsToPay.calTip();
totalsToPay.totalCost();

console.log(totalsToPay.bills);
console.log(totalsToPay.tips);
console.log(totalsToPay.totalCostTB);
