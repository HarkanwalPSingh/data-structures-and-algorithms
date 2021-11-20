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
    let size = 0
    let minSize = 30

    function traverse (r,c){
        
        if (r < 0 || r >= rows) return
        if (c < 0 || c >= cols) return
        if (grid[r][c] === "W" || grid[r][c] === "V") return

        grid[r][c] = "V"
        size += 1

        traverse(r,c+1)
        traverse(r+1,c)
        traverse(r,c-1)
        traverse(r-1,c)

        return

    }
    


    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++){
            if(grid[r][c] === "L"){
                size = 0
                traverse(r,c)
                minSize = Math.min(size, minSize)
            }
            
        }
    }


    return minSize
}

console.log(countIslands(grid))