let permutate = function(nums){

    function permutations (array){
        if (array.length === 1){
            return [array]
        }

        let result = []
        let current = 0
        let output = []

        for (let i = 0; i < array.length; i++){
            current = array[i]
            result = permutations(array.slice(0,i).concat(array.slice(i+1)))

            for (let j = 0; j < result.length; j++){
                output.push([current, ...result[j]])
            }
        }

        return output
    }

    return permutations(nums)

}

let nums = [1,2,3]

console.log(permutate(nums))