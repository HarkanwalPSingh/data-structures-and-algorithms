// Two dfs calls where first call will tell if the region is surrounded and the second dfs call will mark down the region

let solve = function(board){
    let m = board.length
    let n = board[0].length
    let visited = []

    for (let i = 0; i < m; i++){
        visited[i] = []
        for (let j = 0; j < n; j++){
            visited[i][j] = 0
        }
    }

    
    let isSurrounded = false

    function flip (i,j){
        console.log(board)
        if (i === 0 || i === m-1) return 
        if (j === 0 || j === n-1) return 

        if (board[i][j] === "X") return
        
        board[i][j] = "X"

        flip(i, j+1)
        flip(i+1, j)
        flip(i, j-1)
        flip(i-1, j)

        return 
    }

    function checkIfSurrounded(i,j){
        console.log( "board" + board, "visited" + visited)
        if ((i === 0 || i === m -1) && board[i][j] === "X") return true
        if ((j === 0 || j === n -1) && board[i][j] === "X") return true
        if ((i === 0 || i === m -1) && board[i][j] === "O") return false
        if ((j === 0 || j === n -1) && board[i][j] === "O") return false

        if (visited[i][j] === "V") return true
        if (board[i][j] === "X") return true

        visited[i][j] = "V"
        
        return checkIfSurrounded(i,j+1) && checkIfSurrounded(i+1,j) && checkIfSurrounded(i,j-1) && checkIfSurrounded(i-1,j)

    }


    for (let i = 1; i < m-1; i++){
        for (let j = 1; j < n-1; j++){
            
            if (board[i][j] === "O"){
                if (checkIfSurrounded(i,j)) {
                    flip(i,j)
                }
            }
        }
    }

  
    console.log(board)


}

let board = [["O","X","O","O","O","O","O","O","O"],["O","O","O","X","O","O","O","O","X"],["O","X","O","X","O","O","O","O","X"],["O","O","O","O","X","O","O","O","O"],["X","O","O","O","O","O","O","O","X"],["X","X","O","O","X","O","X","O","X"],["O","O","O","X","O","O","O","O","O"],["O","O","O","X","O","O","O","O","O"],["O","O","O","O","O","X","X","O","O"]]

solve(board)