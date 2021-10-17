// let mySqrt = function(x){
//     for (let i = 1; i <= 46342; i++){
//         if (i*i <= x && (i+1)*(i+1) > x){
//             return i
//         }
//     }
// }


let mySqrt = function(x){
    
    if (x < 2){
        return x
    }
    
    let left = 0
    let right = x
    let mid

    while (left < right){
        mid = Math.floor((left + right)/2)
        if (right - left === 1) return left

        if (mid * mid === x) return mid
        if (mid * mid < x) left = mid
        if (mid * mid > x) right = mid

    }
    return mid
}

console.log(mySqrt(1232324))