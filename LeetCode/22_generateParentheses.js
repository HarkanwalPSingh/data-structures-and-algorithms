let generateParentheses = function(n){
    let output = []
    let open = 0
    let close = 0

    function generate(s, open, close){
     
        if (open === n && close === n){
            output.push(s)
            return
        }

        if (open === n && close < n){
            generate(s + ")" , open, close + 1)
        }

        if (open > close && open < n){
            generate(s + ")" , open, close + 1)
            generate(s + "(" , open + 1, close)
        }

        if (open === close && open < n){
            generate(s + "(" , open + 1, close)
        }
        return
    }

    generate("(", open + 1, close)
    return output

}

console.log(generateParentheses(3))