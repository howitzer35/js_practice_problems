

(function() {

  let word = "onomatopoeia";
  let letter = "x"
  var count = word.split(letter).length-1;


  result = (word.indexOf(letter));

    if (result > -1) {
      console.log("Yeah, the letter " + letter + " exists " + count + " times in my word! Good job, buddy!");
    } else {
      console.log("Nope, that letter is terrible, and isn't in my word!");
    };


})();
