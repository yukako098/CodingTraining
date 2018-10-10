/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y){
    var counter = 0;
    var xbits = x.toString(2);
    var ybits = y.toString(2);

    while(xbits.length != ybits.length){
        if(xbits.length < ybits.length){
            xbits = "0" + xbits;
        } else {
            ybits = "0" + ybits;
        }
    }
    for(var i = 0; i < xbits.length; i++){
        for(i; i < ybits.length; i++){
            if(xbits[i] != ybits[i]){
                counter += 1;
            }
        }
    }
    return counter;
}

console.log(hammingDistance(3, 1));
