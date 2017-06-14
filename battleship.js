var game = true;
var counter = 0;
var torpedoes = 1;

// Todo: make a new number if one more more are the same. Possibly use a while loop for this.
var ship1 = ("col" + Math.floor(Math.random()*100)).toString()
var ship2 = ("col" + Math.floor(Math.random()*100)).toString()
var ship3 = ("col" + Math.floor(Math.random()*100)).toString()
var ship4 = ("col" + Math.floor(Math.random()*100)).toString()
var ship5 = ("col" + Math.floor(Math.random()*100)).toString()
console.log(ship1)
console.log(ship2)
console.log(ship3)
console.log(ship4)
console.log(ship5)

function winLose()  {
  if (torpedoes <=25 && ($('.torpedohit').length === 5)) {
    $("p").text("Congrats you win!!")
    game = false; //Game is over and we want to break out of the if loop that this function is called in later
  } else if (torpedoes > 25 && ($('.torpedohit').length < 5)) {
    $("p").text("I'm sorry you lose!!")
    $(".shipHere").addClass("torpedohit") //Shows the location of all ships if the player loses
    game = false; //Game is over and we want to break out of the if loop that this function is called in later
  }
}

$(document).ready(function() {
  var table = $('<table></table>').addClass("board"); //selects the table element in our html
  for(i=0; i<10; i++){ //inside the table, generate the first
    var row = $('<tr>').addClass("row" + i);
    table.append(row); //Updates the rows
    for(j=0; j<10; j++){
      var col = $('<td></td>').attr('id',("col"+ counter++));
      row.append(col); //keeps all of the columns in rows
    } //ends second for loop
} //ends first for loop
  $('#boardDiv').append(table); //Create the table

  //Creates the different classes
  $("#" + ship1).addClass("shipHere"); // This generates one random point on the board
  $("#" + ship2).addClass("shipHere"); // This generates one random point on the board
  $("#" + ship3).addClass("shipHere"); // This generates one random point on the board
  $("#" + ship4).addClass("shipHere"); // This generates one random point on the board
  $("#" + ship5).addClass("shipHere"); // This generates one random point on the board


  $("td").click(function(){
    if (game) { //Put this here so that the game stops when it's over. The game variable becomes false in winLose function, which is called last in this code block
      if($(this).hasClass("torpedoShot"))  { //This will return false when the game is ran, since no squares have been clicked at that point. Once squares have been clicked, the next line prevents a second click on the same square by "turning off" the click function.
        $(this).click(false);
      } else if ($(this).hasClass("torpedoShot")==false) { //Add color to the clicked square. Also add to the overall torpedo count
          $(this).addClass("torpedoShot")
          $(".torpedoesUsed").text(("Torpedoes Left: " + (25-torpedoes++)))
      } // this is the if/then statement to prevent double clicks
      if($(this).hasClass("shipHere")) {
        $(this).addClass("torpedohit")
        $(this).click(false); //This might not be needed
      }
      winLose();
    }
  }) //Is the counter for torpedoes Used


  $(".reset").click(function(){
    $("td").removeClass("torpedoShot torpedohit shipHere")
    $(".torpedoesUsed").text(("Torpedoes Left: 25"))
    game = true;
    counter = 0;
    torpedoes = 1;
    ship1 = ("col" + Math.floor(Math.random()*100)).toString()
    console.log(ship1)
    $("#" + ship1).addClass("shipHere"); // This generates one random point on the board
    ship2 = ("col" + Math.floor(Math.random()*100)).toString()
    console.log(ship2)
    $("#" + ship2).addClass("shipHere"); // This generates one random point on the board
    ship3 = ("col" + Math.floor(Math.random()*100)).toString()
    console.log(ship3)
    $("#" + ship3).addClass("shipHere"); // This generates one random point on the board
    ship4 = ("col" + Math.floor(Math.random()*100)).toString()
    console.log(ship4)
    $("#" + ship4).addClass("shipHere"); // This generates one random point on the board
    ship5 = ("col" + Math.floor(Math.random()*100)).toString()
    console.log(ship5)
    $("#" + ship5).addClass("shipHere"); // This generates one random point on the board
    $("td").on("click");
  }) //Clear the game board when this button is clicked. Torpedo is reset to 1.
}); // Ending to document. ready
