function hourglassSum(arr){
    var row = 6;
    var col = 6;
    var sum = 0;
    var max = -64;

    for(var i = 0; i < row - 2; i++){
        for(var j = 0; j < col - 2; j++){
            sum = (arr[i][j] + arr[i][j+1] + arr[i][j+2]) + (arr[i+1][j+1]) + (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
            // sumArr.push(sum);
            max = Math.max(max, sum);
        }
    }
    return max;
}

var arr2D = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
]

console.log(hourglassSum(arr2D));

