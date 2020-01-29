// back-end //




function diceRoll(dice) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log('dice',dice);
  // variable for providing the length of the array "rolling" //
  var rolling = getRandomInt(dice.length);
  // array accessor //
  var rolledNumber = dice[rolling]
  console.log('rolled number', rolledNumber);
  return rolledNumber;

}


// front-end //

var dice = [1, 2, 3, 4, 5, 6];

$(document).ready(function() {
  $('#roll').click(function(event) {
    event.preventDefault();
    var roll = $("#roll");
    console.log("roll worked!");
    var rolledNumber = diceRoll(dice); 
    console.log('what is rolled number', rolledNumber)
    $('#output').text('You rolled: ' + rolledNumber);
  })
  $('#pass').click(function(event) {
    event.preventDefault();
    var roll = $("#roll");
    console.log("pass worked!");
    $('#output').text('pass worked!') 
  })
})