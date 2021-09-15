// Time complexity O(n2)

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

// console.log(container([1,8,6,2,5,4,8,3,7]))


let container2 = function(height){
    let maxArea = 0
    let area = 0
    let left = 0
    let right = height.length-1
    let shorterHeight = 0

    while (left < right){
        shorterHeight = Math.min(height[left], height[right])
        area = (right - left) * shorterHeight
        
        if (area > maxArea){
            maxArea = area
        }

        if (shorterHeight === height[left]){
            while(left < right){
                left++
                if (height[left]>shorterHeight){
                    break
                }
            }
        }else {
            while(left < right){
                right--
                if (height[right]>shorterHeight){
                    break
                }
            }
        }
   
    }
    return maxArea
}

console.log(container2([1,8,6,2,5,4,8,3,7]))