// --------------------------------------------- Brute force ---------------------------------------------
// let longdestPalindrome = function(s){
//     let palinSubstring = ""
//     let checkString = ""

//     function isPalindrome(string){
//         for (let i = 0; i < Math.floor(string.length/2); i++){
//             if (string[i] !== string[string.length-1-i]){
//                 return false
//             }
//         }
//         return true
//     }


//     for (let i = 0; i < s.length; i++){
//         for (let j = i; j < s.length; j++){
//             checkString = s.slice(i, j+1)

//             if(isPalindrome(checkString)){
//                 if (checkString.length > palinSubstring.length){
//                     palinSubstring = checkString
//                 }
//             }
//         }
//     }

//     return palinSubstring
// }

// console.log(longdestPalindrome("ba"))

// --------------------------------------------- Geeks for Geeks solution ---------------------------------------------
// let longdestPalindrome = function(s){
//     n = s.length
//     let dp = []
//     let subString = ""

//     for (let i = 0; i < n; i++){
//         dp[i] = []
//     }

//     for (let i = 0; i < n; i++){
//         for (let j = i; j <= i + 1; j++){
//             if (i === j){
//                 dp[i][j] = 1
//                 if (j - i + 1 >= subString.length){
//                     subString = s.slice(i,j+1)
//                 }
//             } else if ( j === n) {
//                 continue
//             } else if (s[i] === s[j]){
//                 dp[i][j] = 1
//                 if (j - i + 1 >= subString.length){
//                     subString = s.slice(i,j+1)
//                 }
//             } else {
//                 dp[i][j] = 0
//             }
//         }
//     }

//     for (let j = 2; j < n; j++){
//         for (let i = 0 ;  i < n - j; i++){
//             if (s[i] === s[i+j] && dp[i+1][i+j-1] === 1){
//                 dp[i][i+j] = 1
//                 if (j + 1 >= subString.length){
//                     subString = s.slice(i,i+j+1)
//                 }
//             }else {
//                 dp[i][i+j] = 0
//             }
//         }
//     }
    

//     return subString

// }

// console.log(longdestPalindrome("a"))

// ------------------------------------------------ Expand out check ----------------------------------------------//
let longdestPalindrome = function(s){
   let longest = ""

   for (let i = 0; i < s.length; i++){
        bottomUpCheck(i,i)
        bottomUpCheck(i, i+1)
   }

   function bottomUpCheck(l, r){
       while (l >= 0 && r < s.length && s[l] === s[r]){
           if (r - l + 1 > longest.length){
               longest = s.slice(l,r+1)
           }
           l--
           r++
       }
   }
   return longest
}

console.log(longdestPalindrome("abbad"))