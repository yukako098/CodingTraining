'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr = arr.sort(
    function(a,b){
    return (a < b ? 1 : -1);
    });
    var min_sum = 0;
    var max_sum = 0;
    
    for(var i = 0; i < arr.length - 1; i++){
        min_sum += arr[i];
    }
    
    for(var i = 1; i < arr.length; i++){
        max_sum += arr[i];
    }
    
   console.log(max_sum, min_sum);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
