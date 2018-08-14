var color = [ "red", "green", "purple"];
var symbol = [ "diamond", "squiggle", "oval"];
var shading = [ "solid", "striped", "open"];
var quantity = [ 1, 2, 3];

var m = 1;

var deck = [symbol.length * color.length * shading.length * quantity.length];

for (let i = 0; i < symbol.length; i++) {
    for (let j = 0; j < color.length; j++) { 
        for (let k = 0; k < shading.length; k++) {
            for (let l = 0; l < quantity.length; l++) {
                console.log(m, i, j, k, l);
                console.log(i*3+j*3+k*3+l);
                deck[m++] = symbol[i] + " and " + color[j] + " and " + shading[k] + " and " + quantity[l]; 
                //console.log(m + " " + symbol[i] + " and " + color[j] + " and " + shading[k] + " and " + quantity[l]);
            }
        }
    }
}
            
            
console.log("\n" + deck[0] + " " + deck[78])