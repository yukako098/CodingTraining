function hourglassSum(arr){
    var row = 6;
    var col = 6;
    var sum = 0;
    var sumArr = [];
    var max = 0;

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
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4]
]

console.log(hourglassSum(arr2D));