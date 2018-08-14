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

deck = createDeck();

function zero2nine(){

var result = 0;
result = Math.random();
result = result * 10;
result = result | 0;

return result;
}

function shuffleDeck(deck){

var random = 0;
var n = deck.length; 
var r = 0;
var temp = "";

for (let i = 0; i < n; i++) { 
    random = zero2nine();
    r = (i + random * (n-i)); 
   temp = deck[r];
   deck[r] = deck[i];
   deck[i] = temp;
   } 
return deck;
}

// debug output o make sure the deck is shuffled

deck = shuffleDeck(deck);

var m = 0;

for (let i = 0; i < deck.length; i++) {
        		console.log((m+1) + " " + deck[m].symbol + ", "+ deck[m].color + ", "+ deck[m].shading + ", "+ deck[m].quantity);
				//console.log((m+1) + " " + deck[m]);
				m++;
			}















