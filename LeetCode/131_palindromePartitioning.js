let partition = function (s){

    function isPalindrome (string){
        let [l,r] = [0, string.length-1]

        while(l<=r){
            if (string[l] !== string[r]) return false
            l++
            r--
        }

        return true
    }

    function partitionPalindormes (targetString, memo = {}){
        if (targetString in memo) return memo[targetString]
        if (targetString.length === 0) return [[]]
        
        let result = []

        for (let i = 0; i < targetString.length; i++){
            let suffixString = targetString.slice(i+1)
            let prefixString = targetString.slice(0,i+1)

            if (prefixString[0] !== prefixString[prefixString.length-1]) continue
            
            if (isPalindrome(prefixString)){
                let possiblePartitions = partitionPalindormes(suffixString)
                let partitions = possiblePartitions.map(item => [prefixString, ...item])
                result = [...result, ...partitions]
            }
        }
        
        memo[targetString]  = result
        return result
    }

    return partitionPalindormes(s)
}

console.log(partition("aaaaaaaaaaaaaaaaaaa"))