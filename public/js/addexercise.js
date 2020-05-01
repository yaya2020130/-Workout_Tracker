// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var newCharacter = {
    // name from name input
    name: $("#Name").val().trim(),
    // role from role input
    role: $("#Type").val().trim(),
    // age from age input
    age: $("#Weight").val().trim(),
    // points from force-points input
   Reps: $("#Reps").val().trim(),
   Duration: $("#Duration").val().trim(),
    Distance: $("#Distance").val().trim()
  };
console.log(click)
  // send an AJAX POST-request with jQuery
  $.post("/new", newCharacter)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding character...");
    });

  // empty each input box by replacing the value with an empty string
  $("#N").val("");
  $("#Type").val("");
  $("#Weight").val("");
  $("#Sets").val("");
  $("#Reps").val("");
  $("#Duration").val("");
  $("#Distance").val("");

});
