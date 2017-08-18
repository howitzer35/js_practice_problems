(function () {
  let height = [15.5, 14.9, 12.6, 13.5, 9.7, 23, 5.6, 18.1];
  height.sort(function(a,b){
    return a-b});

console.log(height);

height.reverse();

console.log(height[0]);

}());

//console.log()





/*
Create an array that contains a bunch of numbers representing the heights
of various mountains.

Write some code that identifies the height of the
tallest of the available mountains and prints it out
 */



 //remember: math.max
 //sort [1,10,3,2].sort();
 //returns (4) [1,10,2,3]
