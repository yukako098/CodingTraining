
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
   var counter = 0;

    for(var i = 0; i < ar.length; i++){
        for(var j = i; j < ar.length; j++){
            if(ar[i] == ar[j]){
                counter += 1;
            }

        }
        counter --;
        
    }
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);