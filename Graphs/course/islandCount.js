let grid = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["W", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"]
]

let countIslands = function(grid){
    let count = 0
    let rows = grid.length
    let cols = grid[0].length

    function traverse (r,c){
        if (r < 0 || r >= rows) return
        if (c < 0 || c >= cols) return
        if (grid[r][c] === "W" || grid[r][c] === "V") return

        grid[r][c] = "V"

        traverse(r,c+1)
        traverse(r+1,c)
        traverse(r,c-1)
        traverse(r-1,c)

        return

    }
    


    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++){
            if(grid[r][c] === "L")
            count++
            traverse(r,c)
        }
    }


    return count
}

console.log(countIslands(grid))