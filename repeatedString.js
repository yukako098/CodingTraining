function repeatedString(s, n) {
    var str = "";
    var i = 0;
    var counter = 0;
    if(s == 'a'){
        return n;
    }
    while(str.length != n - s.length){
        str = str.concat(s.substring(i, i+1));
        if(i == s.length){
            i = 0;
        } else {
            i++;
        }

    }
    s = s + str;
    for(var i = 0; i < s.length; i++){
        if(s[i] == 'a'){
            counter += 1;
        }
    }
    return counter;
}


console.log(repeatedString("beeaabc", 711560125001));