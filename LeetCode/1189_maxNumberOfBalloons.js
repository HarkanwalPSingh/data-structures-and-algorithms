let maxNumberOfBalloons = function(text){
    let lettersCount = {
        "b" : 0,
        "a" : 0,
        "l" : 0,
        "o" : 0,
        "n" : 0
    }

    for (let i=0; i<text.length; i++){
        if (text[i] in lettersCount){
            lettersCount[text[i]]++
    }
   }  

    lettersCount["l"] = Math.floor(lettersCount["l"]/2)
    lettersCount["o"] = Math.floor(lettersCount["o"]/2)
    
    let outputArray = Object.values(lettersCount)

    return Math.min(...outputArray)
}

console.log(maxNumberOfBalloons("loonbalxballpoon"))