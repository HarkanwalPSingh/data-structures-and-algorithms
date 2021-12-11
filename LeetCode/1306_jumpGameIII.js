let canReach = function(arr,start){

    function reach (arr, startIndex, visited = {}){
        if (startIndex in visited) return false 
        if (arr[startIndex] === 0) return true
        if (startIndex < 0 || startIndex >= arr.length) return false

        visited[startIndex] = "visited"

        let pathOne = reach (arr, startIndex + arr[startIndex], visited)
        let pathTwo = reach (arr, startIndex - arr[startIndex], visited)

        if (pathOne || pathTwo){
            return true
        }

        return false
    }

    return reach(arr, start)
}

let arr = [3,0,2,1,2]
let start = 2

console.log(canReach(arr, start))