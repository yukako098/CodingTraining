var numJewelsInStones = function(J, S) {
    var counter = 0;
    for(var i = 0; i < J.length; i++){
        for(var j = 0; j < S.length; j++){
            if (J.charAt(i) == S.charAt(j)){
                counter += 1;
            }
        }
    }
    console.log(counter);
    
};

numJewelsInStones("z", "ZZ");