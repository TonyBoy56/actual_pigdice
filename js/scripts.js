// back-end //

function Game(goalScore) {
  this.goalScore = goalScore
}

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


var dice = [1, 2, 3, 4, 5, 6];
// var game = new Game()

// front-end //
// Always put objets in interface


$(document).ready(function() {

  $('form#formy').submit(function(event) {
    event.preventDefault();
    var score = parseInt($("#score-goal").val());
    console.log("score",score);
    var game = new Game(score);
    console.log("game-score",game.goalScore);
    $(".game").show();
    $("#formy").hide();
    $("#scoreGoal").text("This is your goal!! Reach it! " + score);
  })

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