let longestCommonPrefix = function(strs){
    let prefix = ""

    let i = 0
    while(i<strs.length){
        if (i === 0){
            probablePrefix = strs[i]
        }
        for (let j = 0; j < probablePrefix.length && strs[i].length ; j++){
            if(probablePrefix[j] === strs[i][j]){
                prefix = prefix + probablePrefix[j]
            }else {
                break
            }
        }

        probablePrefix = prefix
        prefix = ""
        i++
    }
    return probablePrefix
}

console.log(longestCommonPrefix(["cir", "car"]))