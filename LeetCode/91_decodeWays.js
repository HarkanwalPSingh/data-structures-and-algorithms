// let numDecodings = function (s){
//     let results = []

//     function decode(start, comb, value, memo = {}){

//         if (value.length === 1 && value === "0") return 0
//         if (value.length === 2 && value[0] === "0") return 0
//         if (value.length === 2 && parseInt(value) > 26) return 0
//         if (start >= s.length) {
//             if (comb.length !== 0){
//                 results.push(comb.slice())
//             }
//             return results.length
//         }

//         let newVal = s.slice(start, start+1)
//         comb.push(newVal)
//         decode(start+1, comb, newVal, memo)
//         comb.pop() 

//         newVal = s.slice(start, start+2) 
//         if (newVal.length === 2) {
//             comb.push(newVal)
//             decode(start+2, comb, newVal, memo)
//             comb.pop()
//         } 

//         return output
//     }

//     return decode(0, [], "")

// }

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

let numDecodings = function (s){
    
    function decode(target, memo = {}){

        if (target in memo) return memo[target]
        if (target === "") return 1


        let ways = 0

        let firstEle = parseInt(target[0])

        if (firstEle !== 0){
            let newTarget = target.slice(1)
            ways = decode(newTarget, memo)
        }


        if (target.length >= 2 && firstEle !== 0){
            let secondEle = parseInt(target[1])
            if (firstEle*10 + secondEle <= 26){
                let newTarget = target.slice(2)
                ways += decode(newTarget, memo)
            }
            
        }

        memo[target] = ways
        return ways     

    }

    return decode(s)

}


console.log(numDecodings("2611055971756562"))