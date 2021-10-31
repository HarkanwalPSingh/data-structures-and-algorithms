let trap = function(height){
    if (height.length === 1) return 0

    let p1 = 0
    let p2 = 0
    let prevP2 = 0
    let trappedWater = 0
    let current = 0
    let blocks = 0

    while(p2 < height.length){
        // console.log(p1, p2, prevP2, blocks, current, trappedWater)
        if (p1 === p2){
            prevP2 = p2
            p2++
            continue
        }

        if (height[p2] > height[p1]){
            current = ((p2 - p1 - 1) * Math.min(height[p1] ,  height[p2])) - blocks
            trappedWater += current
            p1 = p2
            current = 0
            blocks = 0
            prevP2 = p1
            p2++
            continue
        }

        if (height[p2] < height[prevP2] && prevP2 !== p1){
            p2++
            prevP2++
            blocks += height[prevP2] 
            continue
        }

        if (height[p2] < height[prevP2] && prevP2 === p1){
            blocks += height[p2]
            p2++
            prevP2++
            continue
        }

        if (height[p2] > height[prevP2]){
            current = ((p2 - p1 - 1) * Math.min(height[p1] ,  height[p2])) - blocks
            p2++
            prevP2++
            blocks+= height[prevP2]
            continue
        }

    }
    trappedWater += current

    return trappedWater
}

let height = [4,2,0,3,2,5]

console.log(trap(height))