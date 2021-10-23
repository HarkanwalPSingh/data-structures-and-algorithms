let uniquePathsII = function(obstacleGrid){

    
    m = obstacleGrid.length
    n = obstacleGrid[0].length
    
    if(obstacleGrid[m-1][n-1] === 1) return 0 

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){

            if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0
            else if (obstacleGrid[i][j] === 0) obstacleGrid[i][j] = 1

            if (i === 0 && j > 0 && obstacleGrid[i][j] !== 0){
                obstacleGrid[i][j] = obstacleGrid[i][j-1]
            } 

            if (j === 0 && i > 0 && obstacleGrid[i][j] !== 0){
                obstacleGrid[i][j] = obstacleGrid[i-1][j]
            } 


            if (i > 0 && j > 0 && obstacleGrid[i][j] !==0){
                obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
            } 

        }
    }

    return obstacleGrid[m-1][n-1]
}

let obstacleGrid = 
[[0,0],[1,1],[0,0]]

console.log(uniquePathsII(obstacleGrid))