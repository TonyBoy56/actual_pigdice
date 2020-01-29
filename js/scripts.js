// back-end //
function Game(goalScore) {
  this.goalScore = goalScore;
}
function Player(name, score) {
  this.name = name; 
  this.score = score;
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

// function displayPlayerTurn(playerName) {
//   $('#output').append("<p class='head'>Rolling for: " + playerName +  "</p>")
// }

$(document).ready(function() {
  
  $('form#formy').submit(function(event) {
    event.preventDefault();
    var score = parseInt($("#score-goal").val());
    // console.log("score",score);
    var game = new Game(score);
    // console.log("game-score",game.goalScore);
    
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    
    var player1 = new Player(name1, 0); 
    var player2 = new Player(name2, 0); 
    console.log('player1 name:',player1.name);
    console.log('player2 name:',player2.name);
    
    // displayPlayerTurn(player1.name);
    $('#output').append("<p class='head'>Rolling for: " + player1.name +  "</p>")
    
    $(".game").show();
    $("#formy").hide();
    
    $("#scoreGoal").text("This is your goal!! Reach it! " + game.goalScore);
    // $("#scoreGoal").text("This is your goal!! Reach it! " + game.goalScore);
  })
  
  $('#roll').click(function(event) {
    event.preventDefault();
    var roll = $("#roll");
    // console.log("roll worked!");
    var rolledNumber = diceRoll(dice); 
    // console.log('what is rolled number', rolledNumber)
    // $('#output').append('You rolled: ' + rolledNumber);
    $('#diced').remove();
    $('#output').append("<p id='diced'>You rolled: " + rolledNumber +  "</p>")
  })
  $('#pass').click(function(event) {
    event.preventDefault();
    var roll = $("#roll");
    // console.log("pass worked!");
    $('#output').text('pass worked!') 
  })
})