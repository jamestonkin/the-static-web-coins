// setting variables
var coins;
var moneyInput;
var moneyParsed;

// function creates money variable sets coins and performs math
function coinCounter(money) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  // create variable to store remaining coins
  var remains = 0;

  // sets quarters by dividing input by 0.25 storing product integer in .quarters
  coinPurse.quarters = parseInt(Math.floor(money / 0.25));
  // calculates remaining money after quarters .toFixed(2) rounds up to 2 deci
  remains = parseFloat(money - (coinPurse.quarters * 0.25)).toFixed(2);
  // sets dimes by dividing the remaining money by 0.10 and stores integer in .dimes
  coinPurse.dimes = parseInt(Math.floor(remains / 0.10));
  // calculates remaining money after dimes
  remains -= (coinPurse.dimes * 0.10).toFixed(2);
  // sets nickels by dividing the remaining money by 0.05 and stores integer in .nickels
  coinPurse.nickels = parseInt(Math.floor(remains / 0.05));
  // calculates remaining money after nickels
  remains -= (coinPurse.nickels * 0.05).toFixed(2);
  // sets pennies by diviging remaining money by 0.01 and stores integer in .pennies
  coinPurse.pennies = parseInt(Math.floor(remains / 0.01));

  return coinPurse;
}
// prompts user for amount of money to be changed into coins
moneyInput = prompt('Amount of Money: ');
// number check: if money input is not a number returns 0 if a number changes to decimal at 2 places
moneyParsed = isNaN(moneyInput) ? 0 : parseFloat(moneyInput).toFixed(2);
// sets coins to the object in coinCounter and logs them in console
coins = coinCounter(moneyParsed);
console.log(coins);
