
var SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"]; 

var RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"];

var deck = [RANKS.length * SUITS.length];


for (let i = 0; i < RANKS.length; i++) {
    for (let j = 0; j < SUITS.length; j++) { 
        deck[SUITS.length*i + j] = RANKS[i] + " of " + SUITS[j]; 
		console.log(RANKS[i] + " of " + SUITS[j]);
	}
}

