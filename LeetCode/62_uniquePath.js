// let uniquePaths = function(m, n){
//     let paths = 0
//     let visited = {}

//     function noOfPaths(i, j){
//         console.log(i,j)

//         if (i === m-1 && j === n-1){
//             paths++
//             return
//         }

//         if (i === m-1){
//             noOfPaths(i, j+1)
//         } else if (j === n -1){
//             noOfPaths(i+1, j)
//         } else {
//             noOfPaths(i+1,j)
//             noOfPaths(i, j+1)
//         }

//         return 
//     }
//     noOfPaths(0,0)
//     return paths
// }


let uniquePaths = function(m, n){
    let dp = []

    for (let i = 0; i < m; i++){
        dp[i] = []
        for (let j = 0; j < n; j++){
            if (j === 0){
                dp[i][j] = 1
            }
            if (i === 0){
                dp[i][j] = 1
            }

            if (i >0 && j>0){
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    // return BigInt(dp[m-1][n-1])

    function factorial() {
        result1 = 1
        result2 = 1

        for (let i = 0; i <= n-2; i++){
            result1 *= (n+i)
            result2 *= (i+1)
        }

        return result1/result2
    }

    // return parseInt(factorial(), 10)
    return factorial() - dp[m-1][n-1]
 
}
console.log(uniquePaths(33,33))