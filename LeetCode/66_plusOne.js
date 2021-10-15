let plusOne = function(digits){
    let carry = 0

    for(let i = digits.length-1; i >= 0; i--){
        digits[i] = i === digits.length ? digits[i] + 1 + carry : digits[i] + carry

        if(digits[digits.length-1] < 10) return digits;

        if(digits[i] > 9){
            digits[i] = digits[i]%10
            carry = 1
        } else {
            carry = 0
        }
    }
    if (carry === 1) digits.unshift(1)
    return digits
}