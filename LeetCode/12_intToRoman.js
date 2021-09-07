let intToRoman = function(num){
    let romanNum = ""
    const divisors = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const romanNumberals = {
        0:"M", 
        1: "CM", 
        2: "D", 
        3: "CD", 
        4: "C",
        5: "XC", 
        6: "L", 
        7: "XL", 
        8: "X", 
        9: "IX",
        10: "V", 
        11: "IV", 
        12: "I"
    }

    let quotient = 0

    for (let i = 0; i < divisors.length; i++){
        quotient = Math.floor(num/divisors[i])
        num = num - quotient*divisors[i]

        for (let j = 0; j < quotient; j++){
            romanNum = romanNum + romanNumberals[i]
        }
    }
    return romanNum
}

console.log(intToRoman(1994))