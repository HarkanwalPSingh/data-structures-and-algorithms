let strStr = function(haystack, needle){
    let ifMismatch = false


    if (needle === "") return 0
    
    for (let i = 0; i < haystack.length; i++){
        if (needle[0] === haystack[i]){

            if (i + needle.length-1 > haystack.length-1) return -1

            for(let j = 0; j < needle.length; j++){
                if (needle[j] !== haystack[i+j]){
                    ifMismatch = true
                    break
                }
            }

            if (!ifMismatch){
                return i
            } else {
                ifMismatch = false
                continue
            }
        }
    }
    return -1
}