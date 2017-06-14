var board = []
var counter = 0
var player1 = 1
var player2 = -1
var torpedoes = 1
var ship1 = 5
var ship2 = 4
var ship3 = 3
var ship4 = 3
var ship5 = 2


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

  $("td").click(function(){
    if($(this).hasClass("torpedoShot")==true)  {
      $(this).click(false);
    } else if ($(this).hasClass("torpedoShot")==false) {
    $(this).addClass("torpedoShot")
    $(".torpedoesUsed").text(("Torpedoes Used: " + torpedoes++))}
  }) //Is the counter for torpedoes Used

  $(".reset").click(function(){
    $("td").removeClass("torpedoShot","torpedohit")
    $(".torpedoesUsed").text(("Torpedoes Used: "))
    torpedoes = 1;
  })

});
