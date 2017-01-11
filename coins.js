var coins;
var moneyInput;
var moneyParsed;

function coinCounter(money) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  var remains = 0;

  coinPurse.quarters = parseInt(Math.floor(money / 0.25));
  remains = parseFloat(money - (coinPurse.quarters * 0.25)).toFixed(2);

  coinPurse.dimes = parseInt(Math.floor(remains / 0.10));
  remains -= (coinPurse.dimes * 0.10).toFixed(2);

  coinPurse.nickels = parseInt(Math.floor(remains / 0.05));
  remains -= (coinPurse.nickels * 0.05).toFixed(2);

  coinPurse.pennies = parseInt(Math.floor(remains / 0.01));

  return coinPurse;
}

moneyInput = prompt('Amount of Money: ');
moneyParsed = isNaN(moneyInput) ? 0 : parseFloat(moneyInput).toFixed(2);

coins = coinCounter(moneyParsed);
console.log(coins);
