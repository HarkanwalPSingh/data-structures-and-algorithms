let maxTurbulenceSize = function(arr){
    let subtractedArr = []
    let maxSize = 0
    let currentSub = 0

    if(arr.length < 2){
        return arr.length
    }
    

    for (let i = 0; i < arr.length - 1; i++){

        currentSub = arr[i] - arr[i+1]
        
        if (currentSub === 0){
            subtractedArr = []
        } else {
            if (subtractedArr.length === 0){
                subtractedArr.push(currentSub)
            } else if ( (subtractedArr[subtractedArr.length-1] > 0 && (currentSub) > 0) || (subtractedArr[subtractedArr.length-1] < 0 && (currentSub) < 0)){
                subtractedArr = []
                subtractedArr.push(currentSub)
            } else {
                subtractedArr.push(currentSub)
            }

        }

        maxSize = Math.max(maxSize, subtractedArr.length)
    }
    return maxSize + 1
}

console.log(maxTurbulenceSize([100,100,100]))