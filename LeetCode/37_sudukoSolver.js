let solveSuduko = function(board){
    let isValid = function(x,y,k){

        for (let i = 0; i < 9; i++){
            if (board[i][y] === k){
                return false
            }
        }
    
        for (let j = 0; j < 9; j++){
            if (board[x][j] === k){
                return false
            }
        }
        

        let top = 0 + 3*Math.floor(x/3)
        let bottom = top + 3
        let left = 0 + 3*Math.floor(y/3)
        let right = left + 3

        for (let i = top; i < bottom; i++){
            for(let j = left; j < right; j++){
                if (board[i][j] === k) return false 
            }
        }
    
        return true
    }

    function solve(){
        for (let r = 0; r < 9; r++){
            for (let c = 0; c < 9; c++){
                if (board[r][c] === "."){
                    for (let k = 1; k <= 9; k++){
                        if (isValid(r, c, k.toString())){
                            board[r][c] = k.toString()
                            if (solve()) return true
                            else board[r][c] = "."
                        }
                    }
                    return false 
                }                
            }
        }
        return true
        
    }

    solve()


    
    return board
}

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

console.log(solveSuduko(board))