let isValid = function(s){
    const openingBracketStack = []
    let i = 0
    const complementaryBracket = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    while(i<s.length){
        if (s[i] === "(" || s[i] === "{" || s[i] === "["){
            openingBracketStack.push(s[i])
        }


        if (s[i] === ")" || s[i] === "}" || s[i] === "]"){
            if(openingBracketStack[openingBracketStack.length-1] !== complementaryBracket[s[i]]){
                return false
            }else {
                openingBracketStack.pop()
            }
        }   
        i++
    }

    if(openingBracketStack.length !== 0){
        return false
    }
    return true
}

console.log(isValid("["))