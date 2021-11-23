// let uniquePathsII = function(obstacleGrid){

    
//     m = obstacleGrid.length
//     n = obstacleGrid[0].length
    
//     if(obstacleGrid[m-1][n-1] === 1) return 0 

//     for (let i = 0; i < m; i++){
//         for (let j = 0; j < n; j++){

//             if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0
//             else if (obstacleGrid[i][j] === 0) obstacleGrid[i][j] = 1

//             if (i === 0 && j > 0 && obstacleGrid[i][j] !== 0){
//                 obstacleGrid[i][j] = obstacleGrid[i][j-1]
//             } 

//             if (j === 0 && i > 0 && obstacleGrid[i][j] !== 0){
//                 obstacleGrid[i][j] = obstacleGrid[i-1][j]
//             } 


//             if (i > 0 && j > 0 && obstacleGrid[i][j] !==0){
//                 obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
//             } 

//         }
//     }

//     return obstacleGrid[m-1][n-1]
// }

// ----------------------- Recursive Solution----------------------------------//

let uniquePathsII = function(obstacleGrid){
    let rows = obstacleGrid.length 
    let cols = obstacleGrid[0].length 

    function gridTraveller (r, c, memo = {}){
        if (r >= rows  || c >= cols) return 0
        if (r === rows-1  && c === cols-1){
            if (obstacleGrid[r][c] === 1) return 0
            return 1   
        }
        if (obstacleGrid[r][c] === 1) return 0
        if ([r,c] in memo) return memo[[r,c]]
    
        memo[[r,c]] = gridTraveller(r, c+1, memo) + gridTraveller(r+1, c, memo)

    
        return memo[[r,c]]
    }

    return gridTraveller(0, 0)

}

let obstacleGrid = [[0,0,0],[1,1,0],[0,0,0]]

console.log(uniquePathsII(obstacleGrid))