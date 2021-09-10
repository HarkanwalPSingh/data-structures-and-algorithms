let lengthOfLastWord = function(s){
    let length = 0

    for(let i = s.length - 1; i >=0; i--){
        if(s[i] !== " "){
            length++
        }
        if(s[i] === " " && length !==0){
            return length
        }
    }
    return length
}

console.log(lengthOfLastWord("a"))