// back-end //







// front-end //

$(document).ready(function() {
  $('#roll').click(function(event) {
    event.preventDefault();
    var roll = $("#roll");
    console.log("roll worked!");
    $('#output').text('roll worked!') 
  })
  $('#pass').click(function(event) {
    event.preventDefault();
    var roll = $("#roll");
    console.log("pass worked!");
    $('#output').text('pass worked!') 
  })
})