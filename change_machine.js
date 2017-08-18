(function () {
  let amount = 47;

  var twenties = Math.trunc(amount / 20); //2
  var tens = Math.trunc((amount - 40) / 10); // 0
  var fives = Math.trunc((amount - 40) / 5); //1
  var ones = Math.trunc((amount - 40) - (5) / 1); //2

  console.log([twenties, tens, fives, ones]);

})();
