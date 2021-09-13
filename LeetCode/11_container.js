let container = function(heights){
    let maxVolume = 0
    let volume = 0

    for (let i=0; i<heights.length-1; i++){
        for(let j=i+1; j<heights.length; j++){
            volume = (j-i)*Math.min(heights[i], heights[j])
            console.log(volume, heights[i], heights[j])
            if(volume>maxVolume){
                maxVolume = volume
            }
        }
    }
    return maxVolume
}

console.log(container([1,8,6,2,5,4,8,3,7]))