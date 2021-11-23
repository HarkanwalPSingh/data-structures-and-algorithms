let numDecodings = function (s){
    let results = []

    function decode(start, comb, value, memo = {}){
        let key = [start, value]

        if (key in memo) return memo[key]
        if (value.length === 1 && value === "0") return 0
        if (value.length === 2 && value[0] === "0") return 0
        if (value.length === 2 && parseInt(value) > 26) return 0
        if (start >= s.length) {
            if (comb.length !== 0){
                results.push(comb.slice())
            }
            return results.length
        }

        let [key1, key2] = [null, null]

        let newVal = s.slice(start, start+1)
        comb.push(newVal)
        key1 = [start+1, newVal]
        memo[key1] = decode(start+1, comb, newVal, memo)
        comb.pop() 

        newVal = s.slice(start, start+2) 
        if (newVal.length === 2) {
            key2 = [start+1, newVal]
            comb.push(newVal)
            memo[key2] = decode(start+2, comb, newVal, memo)
            comb.pop()
        } 

        console.log(memo[key1], memo[key2])

        let output = (memo[key1] === undefined ? 0 : memo[key1]) + (memo[key2] === undefined ? 0 : memo[key2])

        return output
    }

    return decode(0, [], "")

}

// let numDecodings = function (s){
//     let dp = []
//     let current = null

//     if (s[0] === "0") return 0
//     else {
//         dp[0] = 0
//     }
   
    
//     for(let i = 1; i <= s.length; i++){
      
//         current = s[i-1]
//         dp[i] = 0

//         if (current !== 0){
//             if (i-1 === 0) dp[i] += 1
//             else dp[i] = dp[i-1]
//         }

    
//         if(current <= 6 && (parseInt(s[i-2]) === 1 || parseInt(s[i-2]) === 2)){
//             if (current === 0){
//                 if (i-2 === 0) dp[i] = 1
//                 else dp[i] = dp[i-2] 
//             }else {
//                 if (i-2 === 0) dp[i] += 1
//                 else dp[i] += dp[i-2]
//             }
            
//         } 


//     }
//     console.log(dp)

//     return dp[dp.length-1]


// }


console.log(numDecodings("226"))