// let isValidSuduko = function(board){

//     let elementMap = {}

//     for (let i = 0; i < board.length; i++){
//         elementMap = {}
//         for(let j = 0; j < board.length; j++){
//             if (board[i][j] === ".") continue
//             if (board[i][j] in elementMap){
//                 return false
//             } else {
//                 elementMap[board[i][j]] = "added"
//             }
//         }
//     }

//     for (let j = 0; j < board.length; j++){
//         elementMap = {}
//         for(let i = 0; i < board.length; i++){
//             if (board[i][j] === ".") continue
//             if (board[i][j] in elementMap){
//                 return false
//             } else {
//                 elementMap[board[i][j]] = "added"
//             }
//         }
//     }

//     let top = 0
//     let bottom = 3
//     let left = 0
//     let right = 3

//     while(true){
//         elementMap = {}
//         for (let i = top; i < bottom; i++){
//             for(let j = left; j < right; j++){
//                 if (board[i][j] === ".") continue
//                 if (board[i][j] in elementMap){
//                     return false
//                 } else {
//                     elementMap[board[i][j]] = "added"
//                 }
//             }
//         }

//         if(right === 9 && bottom ===9) break
        
//         if (right === 9){
//             left = 0
//             right = 3
//             top += 3
//             bottom+= 3
//             continue
//         }
//         left += 3
//         right += 3

//     }

//     return true
// }

// ---------------------------------- Less memory efficient solution but with less lines of code------------------------------//

let isValidSuduko = function(board){

    let rows = {}
    let cols = {}
    let squares = {}


    
    for (let r = 0; r < board.length; r++){
        if (!(r in rows))  rows[r] = {}

        for(let c = 0; c < board.length; c++){
            if (!(c in cols))  cols[c] = {}
            if (!([Math.floor(r/3),Math.floor(c/3)] in squares)) squares[[Math.floor(r/3),Math.floor(c/3)]] = {}

            if (board[r][c] === ".") continue
            if (board[r][c] in rows[r] || 
                board[r][c] in cols[c] ||
                board[r][c] in squares[[Math.floor(r/3),Math.floor(c/3)]]){
                    return false
                }
            cols[c][board[r][c]] = "added"
            rows[r][board[r][c]] = "added"
            squares[[Math.floor(r/3),Math.floor(c/3)]][board[r][c]] = "added"
        }  
    }

    return true
}

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSuduko(board))