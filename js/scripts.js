// back-end //
function Game(goalScore, currentPlayer) {
  this.goalScore = goalScore;
  this.currentPlayer = currentPlayer;
}

Game.prototype.switchPlayer = function() {
  this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
  return currentPlayer;
}

function Player(name, score) {
  this.name = name; 
  this.score = score;
}

function diceRoll() {
  var dice = [1, 2, 3, 4, 5, 6];
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
// var game = new Game()

// function turnsSwitched(currentPlayer) {
  
//   function switchTurns(currentPlayer) {
//     console.log(this);
//     this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
//     return currentPlayer;
//   }

//   switchTurns(currentPlayer)
//   // if (currentPlayer === 1) {

//   // }
//   console.log("currentPlayer =", currentPlayer);
// }
// var currentPlayer = 1;


// front-end // ------------------------------------------------------------------------------------


// function displayPlayerTurn(playerName) {
//   $('#output').append("<p class='head'>Rolling for: " + playerName +  "</p>")
// }



function switchTurns() {
  game.switchPlayer()
  console.log('game',game)
  if (game.currentPlayer === 1) {
    $('#output').append("<p class='head'>Rolling for: " + player1.name1 +  "</p>")
  } else if (game.currentPlayer === 2) {
    $('#output').append("<p class='head'>Rolling for: " + player2.name2 +  "</p>")
  }
  //changing the name displayed in the output
  //current player holds value of 1
  //when value of currentplayer = 1, display player1.name, if 2 displayer player 2.name
  //player.name = 
  
}

var game = new Game(0, 1);
var currentPlayer = game.currentPlayer;
var player1 = new Player(name, 0); 
var player2 = new Player(name, 0); 
$(document).ready(function() {
  
  
  $('form#formy').submit(function(event) {
    event.preventDefault();
    var score = parseInt($("#score-goal").val());
    // console.log("score",score);
    // console.log("game-score",game.goalScore);
    
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    player1.name = name1
    player2.name = name2
    console.log('player1 name:',player1.name);
    console.log('player2 name:',player2.name);
    
    $('#output').append("<p class='head'>Rolling for: " + player1.name +  "</p>")
    
    $(".game").show();
    $("#formy").hide();
    
    $("#scoreGoal").text("This is your goal!! Reach it! " + game.goalScore);
  })
  
  $('#roll').click(function(event) {
    event.preventDefault();
    var roll = $("#roll");

    var rolledNumber = diceRoll(dice); 

    $('#diced').remove();
    $('#output').append("<p id='diced'>You rolled: " + rolledNumber +  "</p>")
  })
  $('#pass').click(function(event) {
    event.preventDefault();
    switchTurns(currentPlayer);

    $('#output').text('pass worked!') 
  })
})