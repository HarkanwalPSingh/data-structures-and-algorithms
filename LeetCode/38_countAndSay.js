let countAndSay = function(n){

    if (n === 1) return "1"

    function say(numStr){
        let num = numStr[0]
        let count = 1
        

        if(numStr.length === 1) return "1" + numStr 

        let output = ""

        for (let i = 1; i <= numStr.length; i++){
            let currNum = numStr[i]
            
            if (num === currNum) count++
            if (num !== currNum){
                output += count.toString() + num
                num = currNum
                count = 1
            }
 
        }
        return output
    }
    
    return say(countAndSay(n-1))

}

console.log(countAndSay(9))