// The solution below uses queue to infect fresh oranges next to rotten oranges in parallel. 


let orangesRotting = function(grid){
    let m = grid.length
    let n = grid[0].length

    // We need to process all rotten oranges and thier effects in parallel
    let queue = []
    let min = 0

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (grid[i][j] === 2){
               queue.push(
                   {
                       time: 0,
                       pos: [i,j]
                   }
               )
            }
        }
    }

   

    function traverse(i, j, t){

        if (i+1 < m && grid[i+1][j] === 1){
            grid[i+1][j] = 2
            queue.push(
                {
                    time: t+1,
                    pos: [i+1, j]
                }
            )
        }

        if (j + 1 < n && grid[i][j+1] === 1){
            grid[i][j+1] = 2
            queue.push(
                {
                    time: t+1,
                    pos: [i, j+1]
                }
            )
        }

        if (i-1 >= 0 && grid[i-1][j] === 1){
            grid[i-1][j] = 2
            queue.push(
                {
                    time: t+1,
                    pos: [i-1, j]
                }
            )
        }

        if (j-1 >= 0 && grid[i][j-1] === 1){
            grid[i][j-1] = 2
            queue.push(
                {
                    time: t+1,
                    pos: [i, j-1]
                }
            )
        }


    }

    while(queue.length !== 0){
        let current  = queue.shift()
        traverse(current.pos[0], current.pos[1], current.time)
        min = Math.max(min, current.time)
    }



    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (grid[i][j] === 1){
                return -1
            }
        }
    }


    return min
}

let grid = [[2,1,1],[1,1,1],[0,1,2]]

console.log(orangesRotting(grid))