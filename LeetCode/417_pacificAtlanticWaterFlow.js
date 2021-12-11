// let pacificAtlantic = function(heights){

//     let rows = heights.length
//     let cols = heights[0].length

//     function dfs (r, c, parentHeight){
//         if (r < 0 || c < 0) return true
//         if (r >= rows || c >= cols) return true

//         let height = heights[r][c]

//         if (height > parentHeight) return false

//         heights[r][c] = 100001

//         let canReachPacific = dfs(r,c-1, height) || dfs (r-1,c, height)
//         let canReachAtlantic = dfs(r,c+1, height) || dfs (r+1,c, height)

//         heights[r][c] = height

//         if (canReachPacific && canReachAtlantic){
//             return true
//         }

//         return false
//     }

//     let results = []

//     for (let r = 0; r < rows; r++){
//         for (let c = 0; c < cols; c++){
//             if (dfs(r,c,100001)) results.push([r,c])
//         }
//     } 

//     return results
// }

let pacificAtlantic = function(heights){
    let rows = heights.length
    let cols = heights[0].length

    function dfsPacific (r, c, parentHeight, memo){
        let key = r.toString() + "," + c.toString()

        if (key in memo) return memo[key]
        if (r < 0 || c < 0) return true
        if (r >= rows || c >= cols) return false
        
        let height = heights[r][c]

        if (height > parentHeight) return false

        heights[r][c] = 100001

        let canReach  = dfsPacific(r,c-1, height, memo) || dfsPacific (r-1,c, height, memo) || dfsPacific(r,c+1, height, memo) || dfsPacific (r+1,c, height, memo)

        heights[r][c] = height

        if (canReach){
            memo[key] = true
            return true
        }

        memo[key] = false
        return false
    }

    function dfsAtlantic (r, c, parentHeight, memoA){
        let key = r.toString() + "," + c.toString()

        if (key in memoA) return memoA[key]
        if (r < 0 || c < 0) return false
        if (r >= rows || c >= cols) return true
        
        let height = heights[r][c]

        if (height > parentHeight) return false

        heights[r][c] = 100001

        let canReach  = dfsAtlantic(r,c-1, height, memoA) || dfsAtlantic (r-1,c, height, memoA) || dfsAtlantic(r,c+1, height, memoA) || dfsAtlantic (r+1,c, height, memoA)

        heights[r][c] = height
        memoA[key] = canReach

        if (canReach){ 
            return true
        }


        return false
    }

    let results = []

    let [memo, memoA] = [{},{}]

    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++){
            if (dfsPacific(r,c,100001, memo) && dfsAtlantic(r,c,100001, memoA)) results.push([r,c])
        }
    } 

 

    return results
}

let heights = [[1,2,3], [8,9,4], [7,6,5]]

console.log(pacificAtlantic(heights))