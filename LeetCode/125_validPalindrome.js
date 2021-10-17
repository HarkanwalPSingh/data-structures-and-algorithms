let validPalindrome = function(s){
    let i = 0
    s = s.split("")


    while(i < s.length){
        
        if(s[i].charCodeAt(0) >=65 && s[i].charCodeAt(0) <=90){
            s[i] = String.fromCharCode(s[i].charCodeAt(0) + 32)
        }
        if(s[i].charCodeAt(0) <97 || s[i].charCodeAt(0) >122){
            s[i] = String.fromCharCode(32)
        }
        i++

    }
    s = s.join("").split(" ").join("")
    console.log(s)
    
    for (let i = 0; i < Math.floor(s.length/2); i++){
        if (s[i] !== s[s.length-1-i]){
            return false
        }
    }

    return true
}

console.log(validPalindrome("0P"))