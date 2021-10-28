let letterCombinations = function(digits){
    if (digits === "") return []


    let map = {
        "2" : ["a", "b", "c"],
        "3" : ["d", "e", "f"],
        "4" : ["g", "h", "i"],
        "5" : ["j", "k", "l"],
        "6" : ["m", "n", "o"],
        "7" : ["p", "q", "r", "s"],
        "8" : ["t", "u", "v"],
        "9" : ["w", "x", "y", "z"]
    }

    function combinations(s){
        let r = []

        if (s.length === 1){
            return map[s[0]]
        }

        r = combinations(s.slice(1))
        let output = []
        

        for (let i = 0; i < map[s[0]].length; i++){
            for (let j = 0; j < r.length; j++){
                output.push(map[s[0]][i] + r[j])
            }
        }

        return output

    }

    return combinations(digits)

}

console.log(letterCombinations("8"))