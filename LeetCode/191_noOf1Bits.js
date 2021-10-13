// Check solution on Leetcode. Somehow Leetcode's solution is not working here. 


let hammingWeight = function(n){
    let count = 0
    n = n.toString(2)

for(let i = 0; i < n.length; i++){
    if (n[i] === "1"){
        count++
    }
}
return count
}

console.log(hammingWeight(11111111111111111111111111111101))