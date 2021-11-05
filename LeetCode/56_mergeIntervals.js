let merge = function(intervals){
    let start = -1
    let end = -1
    let output = []
    let n = intervals.length
    let i = 0

    intervals = intervals.sort((a,b) => a[0]-b[0])


    while (i < n - 1){
        if (start === -1){
            start = intervals[i][0]
            end = intervals[i][1]
        }

        if (end < intervals[i+1][0]){
            output.push([start, end])
            start = -1
            end = -1
        } else if (end >= intervals[i+1][0]){
                end = Math.max(end, intervals[i+1][1])
            
        }
        i++
    }

    if (end === -1){
        output.push(intervals[n-1])
    } else {
        output.push([start, end])
    }

    return output
}

let intervals = [[1,4],[2,3]]

console.log(merge(intervals))