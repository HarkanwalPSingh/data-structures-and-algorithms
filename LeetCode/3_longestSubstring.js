let lengthOfLongestSubstring = function(s){
    let hashMap = {}
    let max = 0
    let currentLength = 0
    let i = 0

    while( i < s.length){
        if (s[i] in hashMap){
            i = hashMap[s[i]] + 1
            hashMap = {}
            currentLength = 0
        }
        hashMap[s[i]] = i
        currentLength++
        max = Math.max(max, currentLength)
        i++
    }

    return max
}