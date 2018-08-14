<!DOCTYPE html>
<html>
<body>

// Pl``y area bop
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
	console.log("ready to start" 
	);
}

function drawCards(playSurface) {
	for (let i = 0; i < playSurface.length; i++) {
		createCard(playsurface[i]);
	}	
}	

function createCard(playsurface[i]){
	



// Call our Functions
//Create the deck
let masterDeck = createDeck();
//Shuffle the deck
var playDeck = shuffleDeck(masterDeck);
// Deal the cards
let playSurface = createTable(playDeck);
// Make sure we have at least one set to start with
startGame(playDeck, playSurface);





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