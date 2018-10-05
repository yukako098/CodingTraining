var sortArrayByParity = function(A) {
    var arr = new Array();
    
    for(var i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            arr.unshift(A[i]);
        } else {
            arr.push(A[i])
        }
    }
    

    return arr;
    
};

array = [1, 5, 2, 3, 7, 8, 9];

sortArrayByParity = function(array)

console.log(sortArrayByParity);