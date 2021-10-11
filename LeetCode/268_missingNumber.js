let missingNumber = function (nums){
    let sum = (nums.length) * (nums.length +1) / 2
    let result = 0

    nums.forEach(element => {
        sum -= element
    });
    result = sum
    return result
}