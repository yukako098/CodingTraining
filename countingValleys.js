// Complete the countingValleys function below.
function countingValleys(n, s) {
    var current = 0;
    var valley = 0;
    
    for(var i = 0; i < s.length; i++){
        while(s[i] == "U"){
            current += 1;
            if(i > 0 && current == 0){
                valley += 1;
            }
            break;
        }
        while(s[i] == "D"){
            current -= 1;
            break;
        }
    }
    return valley;
}


console.log(countingValleys(8, 'UDUDUDUD'));