let numDecodings = function (s){
    let results = []

    function decode(start, comb, value){
        if (value.length === 1 && value === "0") return
        if (value.length === 2 && value[0] === "0") return
        if (value.length === 2 && parseInt(value) > 26) return
        if (start >= s.length) {
            if (comb.length !== 0){
                results.push(comb.slice())
                return
            }
            return
        }

        let newVal = s.slice(start, start+1)
        comb.push(newVal)
        decode(start+1, comb, newVal)
        comb.pop()

        newVal = s.slice(start, start+2) 
        if (newVal.length === 2) {
            comb.push(newVal)
            decode(start+2, comb, newVal)
            comb.pop()
        } 

        return
    }

    decode(0, [], "")

    return results

}

console.log(numDecodings("111111111111111111111111111111111111111111111"))