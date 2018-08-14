<!DOCTYPE html>
<html>
<body>


<canvas id = "ctx" width="640" height="480" style="border:1px solid #000000;"></canvas>

<script>

// creating a deck of cards based on these four different characteristics or suits.

function createDeck() {

var symbol = [ "diamond", "squiggle", "oval"];
var color = [ "red", "green", "purple"];
var shading = [ "solid", "striped", "open"];
var quantity = [ 1, 2, 3];

// needed for each of the loops.  Each for loop is like a power multiplier  in this case 3 to the 4th power or 81 loops
// Leaving these in and commented out as I will be porting this to other scripting languages.
//var i = 0;  For the symbols on the card
//var j = 0;  For the color of the symbols on the card
//var k = 0;  For the shading of the symbols on the card
//var l = 0;  For the quantity of symbols on the card

//  Creating the deck <Start> ------------------------------------------------------------
// deck array
var deck = [];
var m = 0;  


//  looping structure to create the deck of cards
for (let i = 0; i < symbol.length; i++) {
    for (let j = 0; j < color.length; j++) { 
    	for (let k = 0; k < shading.length; k++) {
        	for (let l = 0; l < quantity.length; l++) {
        		deck[m] = {symbol: symbol[i], color:color[j], shading: shading[k], quantity: quantity[l]}; 
				
				// debug output to make sure this works
				//console.log((m+1) + " " + symbol[i] + " and " + color[j] + " and " + shading[k] + " and " + quantity[l]);
				//console.log((m+1) + " " + deck[m].symbol + ", "+ deck[m].color + ", "+ deck[m].shading + ", "+ deck[m].quantity);
				m++;
			}
		}
	}
}

return deck;
}
/**
 * Copies an array. shuffles the copy and returns it.
 * @param {Array} deckMaster the master deck of cards
 * @returns {array} the shuffled deck
 */
function shuffleDeck(deckMaster) {
  let shuffled = deckMaster.slice(0);
  var j, x, i;
  for (i = shuffled.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = x;
  }
  return shuffled;
}

//
// Prints to the console the master deck and the play deck side by side
//  @param {array} master 
//  @param {array} play 
// 

function displayDecksSideBySide(master, play) {
  console.log();
  console.log("##  MASTER                            PLAY");
  console.log("--- --------------------------------- --------------------------------v");
  for (let id=0; id<master.length; id++) {
    let output = '';
    output += (id+1) + '  ';
    while(output.length<4) { output = ' ' + output; }
    output += master[id].symbol + ', ' + master[id].color + ', ' + master[id].shading + ', ' + master[id].quantity;
    //output = output.padEnd(38, ' ');
    while(output.length<38) { output += ' '; }
    output += play[id].symbol + ', ' + play[id].color + ', ' + play[id].shading + ', ' + play[id].quantity;
    console.log(output);
  }
  console.log("--- --------------------------------- --------------------------------^");
  console.log("##  MASTER                            PLAY");
  console.log();
}
// Creating the deck <End>  --------------------------------------------------------------

//  Creating the table

// initial size is 12, can grow to 15 and if not set amongst the 15, reshuffle and deal again.

function createTable(playDeck) {
	//create initial table plateau of 12 dealt cards
	var table = [];
	
	for ( let cards = 0; cards < 12; cards++) {
		table[cards] = playDeck.pop();
		}

	// check that at least one set is available amongst the initial 12 cards
	let matched = noMatch(table);

//debug statement
//console.log( "\n\nIs there a match? " + matched + "\n\n");	
	//if there is no match then deal out three additional cards.
	if (matched === 0) {
		//adding 3 more cards to the play area.
		for  ( let cards = 12; cards < 15; cards++) {
			table[cards] = playDeck.pop();
		}
	}

// Debug statement to verify that the deck and table are correct.
//console.log(" table cards: " + table.length + " Play deck size: " + playDeck.length);

return table;
}

function noMatch(playSurface) {
		
	for (let i = 0; i < (playSurface.length - 2); i++) {
		for (let j = i+1; j < (playSurface.length - 1); j++) {
	    	for (let k = j+1; k < playSurface.length; k++) {
	   			symbolMatched = 0;
				colorMatched = 0;
				shadingMatched = 0;
				quantityMatched = 0;
				weHaveASet = 0;
	  
		// Are the symbols all the same or all different?
				if (playSurface[i].symbol === playSurface[j].symbol && playSurface[i].symbol === playSurface[k].symbol) {
					symbolMatched = 1;
				} else if ((playSurface[i].symbol !== playSurface[j].symbol) && (playSurface[i].symbol !== playSurface[k].symbol) && (playSurface[j].symbol !== playSurface[k].symbol)) {
					symbolMatched = 1;
				} else { 
					symbolMatched = 0;
				}
		// Now check the colors		
				if (playSurface[i].color === playSurface[j].color && playSurface[i].color === playSurface[k].color) {
					colorMatched = 1;
				} else if ((playSurface[i].color !== playSurface[j].color) && (playSurface[i].color !== playSurface[k].color) && (playSurface[j].color !== playSurface[k].color)) {
					colorMatched = 1;
				} else { 
					colorMatched = 0;
				}
		// Now the check the shading
				if (playSurface[i].shading === playSurface[j].shading && playSurface[i].shading === playSurface[k].shading) {
					shadingMatched = 1;
				} else if ((playSurface[i].shading !== playSurface[j].shading) && (playSurface[i].shading !== playSurface[k].shading) && (playSurface[j].shading !== playSurface[k].shading)) {
					shadingMatched = 1;
				} else { 
					shadingMatched = 0;
				}
		// finally the quantity of symbols
				if (playSurface[i].quantity === playSurface[j].quantity && playSurface[i].quantity === playSurface[k].quantity) {
					quantityMatched = 1;
				} else if ((playSurface[i].quantity !== playSurface[j].quantity) && (playSurface[i].quantity !== playSurface[k].quantity) && (playSurface[j].quantity !== playSurface[k].quantity)) {
					quantityMatched = 1;
				} else { 
					quantityMatched = 0;
				}
		// Now checking if we have a set
				if (4 === (symbolMatched + colorMatched + shadingMatched + quantityMatched)) {
					weHaveASet = 1;
			/* debug code
			console.log ( " \n\nWe have a Set!!: i = " + i + " j = " + j + " k = " + k + " symbol: " + symbolMatched + " color: " + colorMatched + " shading: " + shadingMatched + " quantity: " + quantityMatched + "\n");
			console.log((1) + " " + playSurface[i].symbol + ", "+ playSurface[i].color + ", "+ playSurface[i].shading + ", "+ playSurface[i].quantity);
			console.log((2) + " " + playSurface[j].symbol + ", "+ playSurface[j].color + ", "+ playSurface[j].shading + ", "+ playSurface[j].quantity);
			console.log((3) + " " + playSurface[k].symbol + ", "+ playSurface[k].color + ", "+ playSurface[k].shading + ", "+ playSurface[k].quantity);
			*/
			// if we have a set then no need to do anything else.  Break out of this loop.
					return weHaveASet;
				} else {
					weHaveASet = 0;
			/*debug code
			console.log ( " \nNo Set: i = " + i + " j = " + j + " k = " + k + " symbol: " + symbolMatched + " color: " + colorMatched + " shading: " + shadingMatched + " quantity: " + quantityMatched);
			console.log((1) + " " + playSurface[i].symbol + ", "+ playSurface[i].color + ", "+ playSurface[i].shading + ", "+ playSurface[i].quantity);
			console.log((2) + " " + playSurface[j].symbol + ", "+ playSurface[j].color + ", "+ playSurface[j].shading + ", "+ playSurface[j].quantity);
			console.log((3) + " " + playSurface[k].symbol + ", "+ playSurface[k].color + ", "+ playSurface[k].shading + ", "+ playSurface[k].quantity);
		*/
				}
			}// k for loop
		} // j for loop
	} // i for loop
return weHaveASet;

} //function

		
function startGame(playSurface, playDeck){
	let noSets = noMatch(playSurface);
	let i = 0;
	while (noSets === 0) {
		masterDeck = createDeck();
		playDeck = shuffleDeck(masterDeck);
		playSurface = createTable(playDeck);
		noSets = noMatch(playSurface);
		console.log("loop # " + i);
		i = i+1;		
	}	
	console.log("ready to start");
}

function drawCards(playSurface) {
	for (let i = 0; i < playSurface.length; i++) {
		createCard(playsurface);
	}	
}	

function createCard(playsurface){
	var ctx = document.getElementById("ctx").getContext("2d");
	var width = 80;
	var length = 120;
	var col1x = 25;
	var col2x = 125;
	var col3x = 225;
	var col4x = 325;
	var col5x = 425;
	var row1y = 50;
	var row2y = 190;
	var row3y = 330;
	var padxy = 2;
	var padwl = 4;
	var padx = 10;
	ctx.font = '240px, Arial';
	
	
 // Each of these functions is displaying on the screen the attributes of each card.	
	function cardOne() {
	ctx.fillRect(col1x, row1y, width, length);
	ctx.clearRect(col1x + padxy, row1y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[0].color,   col1x + width/2 - padx, row1y + length/2 - padx);
	ctx.fillText(playSurface[0].symbol,  col1x + width/2 - padx, row1y + length/2 + 10 - padx);
	ctx.fillText(playSurface[0].shading, col1x + width/2 - padx, row1y + length/2 + 20 - padx);
	ctx.fillText(playSurface[0].quantity,col1x + width/2 - padx, row1y + length/2 + 30 - padx);
	}
	
	function cardTwo() {
	ctx.fillRect(col2x, row1y, width, length);
	ctx.clearRect(col2x + padxy, row1y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[1].color,    col2x + width/2 - padx, row1y + length/2 - padx);
	ctx.fillText(playSurface[1].symbol,   col2x + width/2 - padx, row1y + length/2 + 10 - padx);
	ctx.fillText(playSurface[1].shading,  col2x + width/2 - padx, row1y + length/2 + 20 - padx);
	ctx.fillText(playSurface[1].quantity, col2x + width/2 - padx, row1y + length/2 + 30 - padx);
	
	}
	
	function cardThree() {
	ctx.fillRect(col3x, row1y, width, length);
	ctx.clearRect(col3x + padxy, row1y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[2].color,    col3x + width/2 - padx, row1y + length/2 - padx);
	ctx.fillText(playSurface[2].symbol,   col3x + width/2 - padx, row1y + length/2 + 10 - padx);
	ctx.fillText(playSurface[2].shading,  col3x + width/2 - padx, row1y + length/2 + 20 - padx);
	ctx.fillText(playSurface[2].quantity, col3x + width/2 - padx, row1y + length/2 + 30 - padx);
	}
	
	function cardFour() {
	ctx.fillRect(col4x, row1y, width, length);
	ctx.clearRect(col4x + padxy, row1y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[3].color,    col4x + width/2 - padx, row1y + length/2 - padx);
	ctx.fillText(playSurface[3].symbol,   col4x + width/2 - padx, row1y + length/2 + 10 - padx);
	ctx.fillText(playSurface[3].shading,  col4x + width/2 - padx, row1y + length/2 + 20 - padx);
	ctx.fillText(playSurface[3].quantity, col4x + width/2 - padx, row1y + length/2 + 30 - padx);
	}
	
	function cardFive() {
	ctx.fillRect(col1x, row2y, width, length);
	ctx.clearRect(col1x + padxy, row2y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[4].color,    col1x + width/2 - padx, row2y + length/2 - padx);
	ctx.fillText(playSurface[4].symbol,   col1x + width/2 - padx, row2y + length/2 + 10 - padx);
	ctx.fillText(playSurface[4].shading,  col1x + width/2 - padx, row2y + length/2 + 20 - padx);
	ctx.fillText(playSurface[4].quantity, col1x + width/2 - padx, row2y + length/2 + 30 - padx);
	}
	
	function cardSix() {
	ctx.fillRect(col2x, row2y, width, length);
	ctx.clearRect(col2x + padxy, row2y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[5].color,    col2x + width/2 - padx, row2y + length/2 - padx);
	ctx.fillText(playSurface[5].symbol,   col2x + width/2 - padx, row2y + length/2 + 10 - padx);
	ctx.fillText(playSurface[5].shading,  col2x + width/2 - padx, row2y + length/2 + 20 - padx);
	ctx.fillText(playSurface[5].quantity, col2x + width/2 - padx, row2y + length/2 + 30 - padx);
	}
	
	function cardSeven() {
	ctx.fillRect(col3x, row2y, width, length);
	ctx.clearRect(col3x + padxy, row2y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[6].color,    col3x + width/2 - padx, row2y + length/2 - padx);
	ctx.fillText(playSurface[6].symbol,   col3x + width/2 - padx, row2y + length/2 + 10 - padx);
	ctx.fillText(playSurface[6].shading,  col3x + width/2 - padx, row2y + length/2 + 20 - padx);
	ctx.fillText(playSurface[6].quantity, col3x + width/2 - padx, row2y + length/2 + 30 - padx);
	}
	
	function cardEight() {
	ctx.fillRect(col4x, row2y, width, length);
	ctx.clearRect(col4x + padxy, row2y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[7].color,    col4x + width/2 - padx, row2y + length/2 - padx);
	ctx.fillText(playSurface[7].symbol,   col4x + width/2 - padx, row2y + length/2 + 10 - padx);
	ctx.fillText(playSurface[7].shading,  col4x + width/2 - padx, row2y + length/2 + 20 - padx);
	ctx.fillText(playSurface[7].quantity, col4x + width/2 - padx, row2y + length/2 + 30 - padx);
	}
	
	function cardNine() {
	ctx.fillRect(col1x, row3y, width, length);
	ctx.clearRect(col1x + padxy, row3y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[8].color,    col1x + width/2 - padx, row3y + length/2 - padx);
	ctx.fillText(playSurface[8].symbol,   col1x + width/2 - padx, row3y + length/2 + 10 - padx);
	ctx.fillText(playSurface[8].shading,  col1x + width/2 - padx, row3y + length/2 + 20 - padx);
	ctx.fillText(playSurface[8].quantity, col1x + width/2 - padx, row3y + length/2 + 30 - padx);
	}
	
	function cardTen() {
	ctx.fillRect(col2x, row3y, width, length);
	ctx.clearRect(col2x + padxy, row3y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[9].color,   col2x + width/2 - padx, row3y + length/2 - padx);
	ctx.fillText(playSurface[9].symbol,  col2x + width/2 - padx, row3y + length/2 + 10 - padx);
	ctx.fillText(playSurface[9].shading, col2x + width/2 - padx, row3y + length/2 + 20 - padx);
	ctx.fillText(playSurface[9].quantity,col2x + width/2 - padx, row3y + length/2 + 30 - padx);
	}
	
	function cardEleven() {
	ctx.fillRect(col3x, row3y, width, length);
	ctx.clearRect(col3x + padxy, row3y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[10].color,   col3x + width/2 - padx, row3y + length/2 - padx);
	ctx.fillText(playSurface[10].symbol,  col3x + width/2 - padx, row3y + length/2 + 10 - padx);
	ctx.fillText(playSurface[10].shading, col3x + width/2 - padx, row3y + length/2 + 20 - padx);
	ctx.fillText(playSurface[10].quantity,col3x + width/2 - padx, row3y + length/2 + 30 - padx);
	}
		
	function cardTwelve() {
	ctx.fillRect(col4x, row3y, width, length);
	ctx.clearRect(col4x + padxy, row3y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[11].color,   col4x + width/2 - padx, row3y + length/2 - padx);
	ctx.fillText(playSurface[11].symbol,  col4x + width/2 - padx, row3y + length/2 + 10 - padx);
	ctx.fillText(playSurface[11].shading, col4x + width/2 - padx, row3y + length/2 + 20 - padx);
	ctx.fillText(playSurface[11].quantity,col4x + width/2 - padx, row3y + length/2 + 30 - padx);
	}
	
	function cardThirteen() {
	ctx.fillRect(col5x, row1y, width, length);
	ctx.clearRect(col5x + padxy, row1y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[12].color,   col5x + width/2 - padx, row1y + length/2 - padx);
	ctx.fillText(playSurface[12].symbol,  col5x + width/2 - padx, row1y + length/2 + 10 - padx);
	ctx.fillText(playSurface[12].shading, col5x + width/2 - padx, row1y + length/2 + 20 - padx);
	ctx.fillText(playSurface[12].quantity,col5x + width/2 - padx, row1y + length/2 + 30 - padx);
	}
	
	function cardFourteen() {
	ctx.fillRect(col5x, row2y, width, length);
	ctx.clearRect(col5x + padxy, row2y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[13].color,   col5x + width/2 - padx, row2y + length/2 - padx);
	ctx.fillText(playSurface[13].symbol,  col5x + width/2 - padx, row2y + length/2 + 10 - padx);
	ctx.fillText(playSurface[13].shading, col5x + width/2 - padx, row2y + length/2 + 20 - padx);
	ctx.fillText(playSurface[13].quantity,col5x + width/2 - padx, row2y + length/2 + 30 - padx);
	}

	function cardFifteen() {
	ctx.fillRect(col5x, row3y, width, length);
	ctx.clearRect(col5x + padxy, row3y + padxy, width - padwl, length - padwl);
	//card data
	ctx.fillText(playSurface[14].color,   col5x + width/2 - padx, row3y + length/2 - padx);
	ctx.fillText(playSurface[14].symbol,  col5x + width/2 - padx, row3y + length/2 + 10 - padx);
	ctx.fillText(playSurface[14].shading, col5x + width/2 - padx, row3y + length/2 + 20 - padx);
	ctx.fillText(playSurface[14].quantity,col5x + width/2 - padx, row3y + length/2 + 30 - padx);
	}
	
	cardOne();
	cardTwo();	
	cardThree();	
	cardFour();
	cardFive();
	cardSix();
	cardSeven();
	cardEight();
	cardNine();
	cardTen();
	cardEleven();
	cardTwelve();
	
	if (playSurface.length === 15) {
		cardThirteen();
		cardFourteen();
		cardFifteen();
	}
	
}

// Call our Functions
//Create the deck
let masterDeck = createDeck();
//Shuffle the deck
var playDeck = shuffleDeck(masterDeck);
// Deal the cards
let playSurface = createTable(playDeck);
// Make sure we have at least one set to start with
startGame(playDeck, playSurface);

createCard(playSurface);



// For debug purposes
//displayDecksSideBySide(masterDeck, playDeck);

// alternate display method.  Debug only for my education

//  Checking that the playdeck is a shuffled version of the master deck
/*var m = 0;

for (let i = 0; i < playDeck.length; i++) {
        		console.log((m+1) + " " + playDeck[m].symbol + ", "+ playDeck[m].color + ", "+ playDeck[m].shading + ", "+ playDeck[m].quantity);
				//console.log((m+1) + " " + masterDeck[m]);
				m++;
			}
//
*/
/* Checking that the "dealt" cards are correct
var n = 0; 
for (let i = 0; i < playSurface.length; i++) {
        		console.log((n+1) + " " + playSurface[n].symbol + ", "+ playSurface[n].color + ", "+ playSurface[n].shading + ", "+ playSurface[n].quantity);
				//console.log((n+1) + " " + playSurface[n]);
				n++;
			}
*/

</script>
</body>
</html>