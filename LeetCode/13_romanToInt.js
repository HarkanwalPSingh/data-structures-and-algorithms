let romanToInt = function(s){
    number = 0
    romanNumerals = {
        "I": 1, 
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500, 
        "M": 1000 
    }
    let i = 0
    while(i<s.length){
        number = romanNumerals[s[i]] + number
        i++
    }
    if (s.includes("CM") || s.includes("CD")){
        number = number - romanNumerals.C * 2
    }
    if (s.includes("XL") || s.includes("XC")){
        number = number - romanNumerals.X * 2
    }
    if (s.includes("IV") || s.includes("IX")){
        number = number - romanNumerals.I * 2
    }
    return number
}

console.log(romanToInt("MCMXCIV"))
