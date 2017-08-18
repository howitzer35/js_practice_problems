(function () {
  let startingPopulation = 200;
  let birthRate = 0.1;
  let numberOfWeeks = 5;

  let hares = startingPopulation + ((startingPopulation * birthRate) * numberOfWeeks);

  console.log("There will be " + hares + " Cherokee Hares after " + numberOfWeeks + " weeks.")


})();
