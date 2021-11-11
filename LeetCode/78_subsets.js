let subsets = function(nums){
    let output = []
    output.push(nums)
    let visitedMap = {}

    function combinations (array){
        if (array.length === 0){
            return 
        }

        let newArray = []

        for (let i = 0; i < array.length; i++){
            newArray = array.slice(0,i).concat(array.slice(i+1))
            newArray.sort((a,b) => a-b)
            if (!(newArray in visitedMap)){
                visitedMap[[newArray]] = "visited"
                output.push(newArray)
                combinations(newArray)
        }
    }
    return
    }

    combinations(nums)
    return output
}

console.log(subsets([4,4,4,1,4]))



