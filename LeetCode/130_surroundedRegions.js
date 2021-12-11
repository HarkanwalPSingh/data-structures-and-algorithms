// Do a DFS call on the outer O elements and if an O is found, then change it to let's say V. Then loop through all the elements 
// and if we find an O then it must be surrounded by X. So convert all Os to Xs and Vs to Os

let solve = function(board){
    let rows = board.length
    let cols = board[0].length
    
    function dfs(row,col){
        if (row < 0 || row >= rows) return
        if (col < 0 || col >= cols) return
        if (board[row][col] === "X" || board[row][col] === "V") return
        if (board[row][col] === "O") board[row][col] = "V"

        dfs(row,col+1)
        dfs(row+1,col)
        dfs(row,col-1)
        dfs(row-1,col)

        return 

    }


    for (let r = 0; r < rows; r++){
        if (r === 0 || r === rows - 1){
            for (let c = 0; c < cols; c++){
                dfs(r,c)
            }
        } else {
            dfs(r,0)
            dfs(r,cols-1)
        }        
    }

    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++){
            if(board[r][c] === "V") board[r][c] = "O"
        }
    }

    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++){
            if(board[r][c] === "O") board[r][c] = "X"
        }
    }

}

let board = [["O","X","O","O","O","O","O","O","O"],["O","O","O","X","O","O","O","O","X"],["O","X","O","X","O","O","O","O","X"],["O","O","O","O","X","O","O","O","O"],["X","O","O","O","O","O","O","O","X"],["X","X","O","O","X","O","X","O","X"],["O","O","O","X","O","O","O","O","O"],["O","O","O","X","O","O","O","O","O"],["O","O","O","O","O","X","X","O","O"]]

solve(board)