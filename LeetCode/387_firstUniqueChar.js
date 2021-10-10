let firstUnqiChar = function(s){
    let charCountMap = {}

    for (let i = 0; i < s.length; i++){
        if (s[i] in charCountMap){
            charCountMap[s[i]] += 1
        } else {
            charCountMap[s[i]] = 1
        }
    }

    for (let i = 0; i < s.length; i++){
        if (charCountMap[s[i]] === 1){
            return i
        }
    }
    return -1

}