// let tribonacci = function(n){
//     if (n<2){
//         return n
//     }
//     if (n===2){
//         return n-1
//     }

//     return tribonacci(n-1) + tribonacci (n-2) + tribonacci(n-3)
// }

let tribonacci = function(n){
    if (n<2){
        return n
    }
    if (n===2){
        return n-1
    }

    let series = [0, 1, 1]

    for (let i = 3; i <= n; i++){
        series.push(series[i-1] + series[i-2] + series[i-3])
    }

    return series[n]

}