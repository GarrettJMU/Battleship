var game = true;
var counter = 0;
var torpedoes = 1;
var shipsRemaining = 8;

var ship1Accept =           [0,1,2,3,4,5,10,11,12,13,14,15,20,21,22,23,24,25,30,31,32,33,34,35,40,41,42,43,44,45,50,51,52,53,54,55,60,61,62,63,64,65,70,71,72,73,74,75,80,81,82,83,84,85,90,91,92,93,94,95]
  var ship2Accept = []
    for(var c=0; c <70; c+=1) {
      ship2Accept.push(c)
    }
  var ship3Accept = []
    for(var b=0; b <80; b+=1) {
      ship3Accept.push(b)
    }
  var ship4Accept = [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,70,71,72,73,74,75,76,77,78,80,81,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,98]
  var ship6Accept = [0,1,2,3,4,5,6,10,11,12,13,14,15,16,20,21,22,23,24,25,26,30,31,32,33,34,35,36,40,41,42,43,44,45,46,50,51,52,53,54,55,56,60,61,62,63,64,65,66,70,71,72,73,74,75,76,80,81,82,83,84,85,86,90,91,92,93,94,95,96]
  var ship7Accept = [0,1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37,40,41,42,43,44,45,46,47,50,51,52,53,54,55,56,57,60,61,62,63,64,65,66,67,70,71,72,73,74,75,76,77,80,81,82,83,84,85,86,87,90,91,92,93,94,95,96,97]
  var ship8Accept = []
    for(var a=0; a <90; a+=1) {
      ship8Accept.push(a)
    }

// This creates 5 random points on the board. Will include a loop (or something of the sort) to ensure that there are no duplicates.
var ship1 = ship1Accept[(Math.floor(Math.random()*ship1Accept.length))]
var ship2 = ship2Accept[(Math.floor(Math.random()*ship2Accept.length))]
var ship3 = ship3Accept[(Math.floor(Math.random()*ship3Accept.length))]
var ship4 = ship4Accept[(Math.floor(Math.random()*ship4Accept.length))]
var ship5 = (Math.floor(Math.random()*100))
var ship6 = ship6Accept[(Math.floor(Math.random()*ship6Accept.length))]
var ship7 = ship7Accept[(Math.floor(Math.random()*ship7Accept.length))]
var ship8 = ship8Accept[(Math.floor(Math.random()*ship8Accept.length))]

function winLose()  {
  if (torpedoes <=25 && ($('.torpedohit').length === 24)) {
    $("p").text("Congrats you win!!")
    game = false; //Game is over and we want to break out of the if loop that this function is called in later
  } else if (torpedoes > 25 && ($('.torpedohit').length < 24)) {
    $(".torpedoesUsed").text("I'm sorry you lose!!")
    $(".shipHere1, .shipHere2, .shipHere3, .shipHere4, .shipHere5, .shipHere6, .shipHere7, .shipHere8" ).addClass("torpedohit") //Shows the location of all ships if the player loses
    game = false; //Game is over and we want to break out of the if loop that this function is called in later
  }
}

function shipsLeft()  {
    if (($('.shipHere1.torpedohit').length === 5)){
      if (!$('.shipHere1.torpedohit').hasClass(".shipSunk")) {
        shipsRemaining--;
        $(".shipsRemaining").text(("Ships Remaining: " + (shipsRemaining)))
        $('.shipHere1.torpedohit').addClass(".shipSunk")
    }
    }
    if ($('.shipHere2.torpedohit').length === 4){
      if (!$('.shipHere2.torpedohit').hasClass(".shipSunk")) {
        shipsRemaining--;
        $(".shipsRemaining").text(("Ships Remaining: " + (shipsRemaining)))
        $('.shipHere2.torpedohit').addClass(".shipSunk")
    }
    }
    if ($('.shipHere3.torpedohit').length === 3){
      if (!$('.shipHere3.torpedohit').hasClass(".shipSunk")) {
        shipsRemaining--;
        $(".shipsRemaining").text(("Ships Remaining: " + (shipsRemaining)))
        $('.shipHere3.torpedohit').addClass(".shipSunk")
    }
    }
    if ($('.shipHere4.torpedohit').length === 2){
      if (!$('.shipHere4.torpedohit').hasClass(".shipSunk")) {
        shipsRemaining--;
        $(".shipsRemaining").text(("Ships Remaining: " + (shipsRemaining)))
        $('.shipHere4.torpedohit').addClass(".shipSunk")
    }
    }
    if ($('.shipHere5.torpedohit').length === 1){
      if (!$('.shipHere5.torpedohit').hasClass(".shipSunk")) {
        shipsRemaining--;
        $(".shipsRemaining").text(("Ships Remaining: " + (shipsRemaining)))
        $('.shipHere5.torpedohit').addClass(".shipSunk")
    }
    }
    if ($('.shipHere6.torpedohit').length === 4){
      if (!$('.shipHere6.torpedohit').hasClass(".shipSunk")) {
        shipsRemaining--;
        $(".shipsRemaining").text(("Ships Remaining: " + (shipsRemaining)))
        $('.shipHere6.torpedohit').addClass(".shipSunk")
    }
    }
    if ($('.shipHere7.torpedohit').length === 3){
      if (!$('.shipHere7.torpedohit').hasClass(".shipSunk")) {
        shipsRemaining--;
        $(".shipsRemaining").text(("Ships Remaining: " + (shipsRemaining)))
        $('.shipHere7.torpedohit').addClass(".shipSunk")
    }
    }
    if ($('.shipHere8.torpedohit').length === 2){
      if (!$('.shipHere8.torpedohit').hasClass(".shipSunk")) {
        shipsRemaining--;
        $(".shipsRemaining").text(("Ships Remaining: " + (shipsRemaining)))
        $('.shipHere8.torpedohit').addClass(".shipSunk")
    }
    }
}

//This setups all of the lengths of the ships
function ship1Setup() {
   ship1 = ship1Accept[(Math.floor(Math.random()*ship1Accept.length))]
   $("#col" + ship1).addClass("shipHere1"),$("#col" + (ship1+1)).addClass("shipHere1"),$("#col" + (ship1+2)).addClass("shipHere1"),$("#col" + (ship1+3)).addClass("shipHere1"),$("#col" + (ship1+4)).addClass("shipHere1");
}
function ship2Setup() {
    ship2 = ship2Accept[(Math.floor(Math.random()*ship2Accept.length))]
    $("#col" + ship2).addClass("shipHere2");$("#col" + (ship2+10)).addClass("shipHere2");$("#col" + (ship2+20)).addClass("shipHere2");$("#col" + (ship2+30)).addClass("shipHere2");
}
function ship3Setup() {
    ship3 = ship3Accept[(Math.floor(Math.random()*ship3Accept.length))]
    $("#col" + ship3).addClass("shipHere3");$("#col" + (ship3+10)).addClass("shipHere3");$("#col" + (ship3+20)).addClass("shipHere3");
}
function ship4Setup() {
  ship4 = ship4Accept[(Math.floor(Math.random()*ship4Accept.length))]
  $("#col" + ship4).addClass("shipHere4");$("#col" + (ship4+1)).addClass("shipHere4")
}
function ship5Setup() {
  ship5 = (Math.floor(Math.random()*100))
  $("#col" + ship5).addClass("shipHere5");
}
function ship6Setup() {
  ship6 = ship6Accept[(Math.floor(Math.random()*ship6Accept.length))]
  $("#col" + ship6).addClass("shipHere6"),$("#col" + (ship6+1)).addClass("shipHere6"),$("#col" + (ship6+2)).addClass("shipHere6"),$("#col" + (ship6+3)).addClass("shipHere6");
}
function ship7Setup() {
  ship7 = ship7Accept[(Math.floor(Math.random()*ship7Accept.length))]
  $("#col" + ship7).addClass("shipHere7"),$("#col" + (ship7+1)).addClass("shipHere7"),$("#col" + (ship7+2)).addClass("shipHere7");
}
function ship8Setup() {
  ship8 = ship8Accept[(Math.floor(Math.random()*ship8Accept.length))]
  $("#col" + ship8).addClass("shipHere8");$("#col" + (ship8+10)).addClass("shipHere8");
}

// These check all of our ships to ensure that they aren't bumping
function checkShip2() {
    while ($(".shipHere2").is(".shipHere1, .ship1Surround")) {
      $("td").removeClass("shipHere2");
      ship2Setup();
    }
  }
function checkShip3() {
    while ($(".shipHere3").is(".shipHere1, .ship1Surround, .shipHere2, .ship2Surround"))  {
      $("td").removeClass("shipHere3");
      ship3Setup();
    }
  }
function checkShip4() {
    while ($(".shipHere4").is(".shipHere1, .ship1Surround, .shipHere2, .ship2Surround, .shipHere3, .ship3Surround"))  {
      $("td").removeClass("shipHere4");
      ship4Setup();
    }
  }
function checkShip5() {
    while ($(".shipHere5").is(".shipHere1, .ship1Surround, .shipHere2, .ship2Surround, .shipHere3, .ship3Surround, .shipHere4, .ship4Surround"))  {
      $("td").removeClass("shipHere5");
      ship5Setup();
    }
  }
function checkShip6() {
  while ($(".shipHere6").is(".shipHere1, .ship1Surround, .shipHere2, .ship2Surround, .shipHere3, .ship3Surround, .shipHere4, .ship4Surround, .shipHere5, .ship5Surround"))  {
    $("td").removeClass("shipHere6");
    ship6Setup();
}}
function checkShip7() {
  while ($(".shipHere7").is(".shipHere1, .ship1Surround, .shipHere2, .ship2Surround, .shipHere3, .ship3Surround, .shipHere4, .ship4Surround, .shipHere5, .ship5Surround, .shipHere6, .ship6Surround"))  {
    $("td").removeClass("shipHere7");
    ship7Setup();
}}
function checkShip8() {
  while ($(".shipHere8").is(".shipHere1, .ship1Surround, .shipHere2, .ship2Surround, .shipHere3, .ship3Surround, .shipHere4, .ship4Surround, .shipHere5, .ship5Surround, .shipHere6, .ship6Surround, .shipHere7, .ship7Surround"))  {
    $("td").removeClass("shipHere8");
    ship8Setup();
}}

// This creates a class around all of our ships to prevent them from touching
function ship1Surround()  {
  $("#col" + (ship1+10)).addClass("ship1Surround")
  $("#col" + (ship1-10)).addClass("ship1Surround")
  $("#col" + (ship1-1)).addClass("ship1Surround")
  $("#col" + (ship1-11)).addClass("ship1Surround")
  $("#col" + (ship1+9)).addClass("ship1Surround")
  $("#col" + ((ship1+1)+10)).addClass("ship1Surround")
  $("#col" + ((ship1+1)-10)).addClass("ship1Surround")
  $("#col" + ((ship1+2)+10)).addClass("ship1Surround")
  $("#col" + ((ship1+2)-10)).addClass("ship1Surround")
  $("#col" + ((ship1+3)+10)).addClass("ship1Surround")
  $("#col" + ((ship1+3)-10)).addClass("ship1Surround")
  $("#col" + ((ship1+4)+10)).addClass("ship1Surround")
  $("#col" + ((ship1+4)-10)).addClass("ship1Surround")
  $("#col" + ((ship1+4)+1)).addClass("ship1Surround")
  $("#col" + ((ship1+4)+11)).addClass("ship1Surround")
  $("#col" + ((ship1+4)-9)).addClass("ship1Surround")
}
function ship2Surround()  {
  $("#col" + (ship2-10)).addClass("ship2Surround")
  $("#col" + (ship2-1)).addClass("ship2Surround")
  $("#col" + (ship2+1)).addClass("ship2Surround")
  $("#col" + (ship2-11)).addClass("ship2Surround")
  $("#col" + (ship2-9)).addClass("ship2Surround")
  $("#col" + ((ship2+10)+1)).addClass("ship2Surround")
  $("#col" + ((ship2+10)-1)).addClass("ship2Surround")
  $("#col" + ((ship2+20)+1)).addClass("ship2Surround")
  $("#col" + ((ship2+20)-1)).addClass("ship2Surround")
  $("#col" + ((ship2+30)+1)).addClass("ship2Surround")
  $("#col" + ((ship2+30)-1)).addClass("ship2Surround")
  $("#col" + ((ship2+30)+10)).addClass("ship2Surround")
  $("#col" + ((ship2+30)+11)).addClass("ship2Surround")
  $("#col" + ((ship2+30)+9)).addClass("ship2Surround")
}
function ship3Surround()  {
  $("#col" + (ship3-10)).addClass("ship3Surround")
  $("#col" + (ship3-1)).addClass("ship3Surround")
  $("#col" + (ship3+1)).addClass("ship3Surround")
  $("#col" + (ship3-11)).addClass("ship3Surround")
  $("#col" + (ship3-9)).addClass("ship3Surround")
  $("#col" + ((ship3+10)+1)).addClass("ship3Surround")
  $("#col" + ((ship3+10)-1)).addClass("ship3Surround")
  $("#col" + ((ship3+20)+1)).addClass("ship3Surround")
  $("#col" + ((ship3+20)-1)).addClass("ship3Surround")
  $("#col" + ((ship3+20)+10)).addClass("ship3Surround")
  $("#col" + ((ship3+20)+11)).addClass("ship3Surround")
  $("#col" + ((ship3+20)+9)).addClass("ship3Surround")
}
function ship4Surround()  {
  $("#col" + (ship4+10)).addClass("ship4Surround")
  $("#col" + (ship4-10)).addClass("ship4Surround")
  $("#col" + (ship4-1)).addClass("ship4Surround")
  $("#col" + (ship4-11)).addClass("ship4Surround")
  $("#col" + (ship4+9)).addClass("ship4Surround")
  $("#col" + ((ship4+1)+10)).addClass("ship4Surround")
  $("#col" + ((ship4+1)-10)).addClass("ship4Surround")
  $("#col" + ((ship4+1)+1)).addClass("ship4Surround")
  $("#col" + ((ship4+1)+11)).addClass("ship4Surround")
  $("#col" + ((ship4+1)-9)).addClass("ship4Surround")
}
function ship5Surround()  {
  $("#col" + (ship5+10)).addClass("ship5Surround")
  $("#col" + (ship5-10)).addClass("ship5Surround")
  $("#col" + (ship5-1)).addClass("ship5Surround")
  $("#col" + (ship5+1)).addClass("ship5Surround")
  $("#col" + (ship5-11)).addClass("ship5Surround")
  $("#col" + (ship5+11)).addClass("ship5Surround")
  $("#col" + (ship5+9)).addClass("ship5Surround")
  $("#col" + (ship5-9)).addClass("ship5Surround")
}
function ship6Surround()  {
  $("#col" + (ship6+10)).addClass("ship6Surround")
  $("#col" + (ship6-10)).addClass("ship6Surround")
  $("#col" + (ship6-1)).addClass("ship6Surround")
  $("#col" + (ship6-11)).addClass("ship6Surround")
  $("#col" + (ship6+9)).addClass("ship6Surround")
  $("#col" + ((ship6+1)+10)).addClass("ship6Surround")
  $("#col" + ((ship6+1)-10)).addClass("ship6Surround")
  $("#col" + ((ship6+2)+10)).addClass("ship6Surround")
  $("#col" + ((ship6+2)-10)).addClass("ship6Surround")
  $("#col" + ((ship6+3)+10)).addClass("ship6Surround")
  $("#col" + ((ship6+3)-10)).addClass("ship6Surround")
  $("#col" + ((ship6+3)+1)).addClass("ship6Surround")
  $("#col" + ((ship6+3)+11)).addClass("ship6Surround")
  $("#col" + ((ship6+3)-9)).addClass("ship6Surround")
}
function ship7Surround()  {
  $("#col" + (ship7+10)).addClass("ship7Surround")
  $("#col" + (ship7-10)).addClass("ship7Surround")
  $("#col" + (ship7-1)).addClass("ship7Surround")
  $("#col" + (ship7-11)).addClass("ship7Surround")
  $("#col" + (ship7+9)).addClass("ship7Surround")
  $("#col" + ((ship7+1)+10)).addClass("ship7Surround")
  $("#col" + ((ship7+1)-10)).addClass("ship7Surround")
  $("#col" + ((ship7+2)+10)).addClass("ship7Surround")
  $("#col" + ((ship7+2)-10)).addClass("ship7Surround")
  $("#col" + ((ship7+2)+1)).addClass("ship7Surround")
  $("#col" + ((ship7+2)+11)).addClass("ship7Surround")
  $("#col" + ((ship7+2)-9)).addClass("ship7Surround")
}
function ship8Surround()  {
  $("#col" + (ship8-10)).addClass("ship8Surround")
  $("#col" + (ship8-1)).addClass("ship8Surround")
  $("#col" + (ship8+1)).addClass("ship8Surround")
  $("#col" + (ship8-11)).addClass("ship8Surround")
  $("#col" + (ship8-9)).addClass("ship8Surround")
  $("#col" + ((ship8+10)+1)).addClass("ship8Surround")
  $("#col" + ((ship8+10)-1)).addClass("ship8Surround")
  $("#col" + ((ship8+10)+10)).addClass("ship8Surround")
  $("#col" + ((ship8+10)+11)).addClass("ship8Surround")
  $("#col" + ((ship8+10)+9)).addClass("ship8Surround")
}

//Creates the rows and then appends the table
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

// This creates a horizontal ship of 5 consecutive blocks by adding 1 more to each class
ship1Setup();
ship1Surround();
//Four-block ship, but made vertical by adding 10 more to each consecutive block
ship2Setup();
checkShip2();
ship2Surround();
//Three-block vertical ship
ship3Setup();
checkShip3();
ship3Surround();
//Two-block horizontal ship
ship4Setup();
checkShip4();
ship4Surround();
//Single-block ship
ship5Setup();
checkShip5();
ship5Surround();
//Four-block ship, but made horizontal by adding 1 more to each consecutive block
ship6Setup();
checkShip6();
ship6Surround();
//Three-block ship, but made horizontal by adding 1 more to each consecutive block
ship7Setup();
checkShip7();
ship7Surround();
//Two-block ship, but made vertical by adding 10 more to the other block
ship8Setup();
checkShip8();
ship8Surround();

  $("td").click(function(){
    if (game) { //Put this here so that the game stops when it's over. The game variable becomes false in winLose function, which is called last in this code block
      if($(this).hasClass("torpedoShot"))  { //This will return false when the game is ran, since no squares have been clicked at that point. Once squares have been clicked, the next line prevents a second click on the same square by "turning off" the click function.
        $(this).click(false);
      } else if ($(this).hasClass("torpedoShot")==false) { //Add color to the clicked square. Also add to the overall torpedo count
          $(this).addClass("torpedoShot")
          $(".torpedoesUsed").text(("Torpedoes Left: " + (25-torpedoes++)))
      } // this is the if/then statement to prevent double clicks
      if($(this).is(".shipHere1, .shipHere2, .shipHere3, .shipHere4, .shipHere5, .shipHere6, .shipHere7, .shipHere8")) {
        $(this).addClass("torpedohit")
        $(this).click(false);
      }
      shipsLeft();
      winLose();
    }
  }) //Is the counter for torpedoes Used
}); // Ending to document. ready
