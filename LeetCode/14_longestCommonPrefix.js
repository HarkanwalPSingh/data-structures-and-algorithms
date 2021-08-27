let longestCommonPrefix = function(strs){
    let prefix = ""

    let i = 0
    while(i<strs.length){
        if (i === 0){
            prefix = strs[i]
        }
        
        i++
    }
    return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))