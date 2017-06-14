var board = []
var counter = 0
var player1 = 1
var player2 = -1
var torpedoes = 1
var ship1 = ("col" + Math.floor(Math.random()*100)).toString()
var ship2 = 4
var ship3 = 3
var ship4 = 3
var ship5 = 2
console.log(ship1)


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
  $('#boardDiv').append(table);

  $("#" + ship1).addClass("shipHere"); // This generates one random point on the board

  $("td").click(function(){
    if($(this).hasClass("torpedoShot"))  { //This will return false when the game is ran, since no squares have been clicked at that point. Once squares have been clicked, the next line prevents a second click on the same square by "turning off" the click function.
      $(this).click(false);
    } else if ($(this).hasClass("torpedoShot")==false) { //Add color to the clicked square. Also add to the overall torpedo count
        $(this).addClass("torpedoShot")
        $(".torpedoesUsed").text(("Torpedoes Used: " + torpedoes++))
    } // this is the if/then statement to prevent double clicks
    if($(this).hasClass("shipHere")) {
      $(this).addClass("torpedohit")
      $(this).click(false);
    }
  }) //Is the counter for torpedoes Used

  $(".reset").click(function(){
    $("td").removeClass("torpedoShot torpedohit shipHere")
    $(".torpedoesUsed").text(("Torpedoes Used: "))
    torpedoes = 1;
    ship1 = ("col" + Math.floor(Math.random()*100)).toString()
    console.log(ship1)
    $("#" + ship1).addClass("shipHere"); // This generates one random point on the board
  }) //Clear the game board when this button is clicked. Torpedo is reset to 1.

});
