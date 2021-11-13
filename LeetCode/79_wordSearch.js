// let exist = function(board, word){
//     let wordFound = false
//     let wordLength = word.length
//     let top = 0
//     let bottom  = board.length - 1
//     let left = 0
//     let right = board[0].length - 1 
 
    


//     function traverse (i, j, rooti, rootj, k, cloneBoard){
//         console.log(cloneBoard)

//         if (wordFound) return 
//         if (i < top || i > bottom) return
//         if (j < left || j > right) return 
//         if (k > wordLength - 1) return
     
        
//         if (cloneBoard[i][j] === word[k] && !(i === rooti && j === rootj)){
//             if (k === wordLength - 1){
//                 wordFound = true     
//             }
//             let temp = cloneBoard[i][j].slice()
//             cloneBoard[i][j] = "1"
//             traverse(i, j, i, j, k + 1, cloneBoard)

//             if (!wordFound){
//                 cloneBoard[i][j] = temp
//             }
            
//         }
        
//         if (cloneBoard[i][j] !== word[k] && !(i === rooti && j === rootj)){
//             return
//         }

//         traverse(i, j+1, rooti, rootj, k, cloneBoard)
//         traverse(i+1, j, rooti, rootj, k, cloneBoard)
//         traverse(i, j-1, rooti, rootj, k, cloneBoard)
//         traverse(i-1, j, rooti, rootj, k, cloneBoard)

    
//         return
//     }

//     for (let i = top; i <= bottom; i++){
//         for(let j = left; j <= right; j++){
            
//             if (board[i][j] === word[0]){

//                 if (wordLength === 1){
//                     return true
//                 }
//                 let cloneBoard = []
                
//                 for(let m = 0; m < board.length; m++){
//                     cloneBoard[m] = board[m].slice()
//                 }
//                 cloneBoard[i][j] = "1"
//                 traverse(i, j, i, j, 1 , cloneBoard)

//                 if (wordFound){
//                     return wordFound
//                 }
//             }
//         }
//     }

//     return wordFound

// }

// let board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
// let word = "ABCEFSADEESE"

// console.log(exist(board, word))


// var exist = function(board, word) {
//     let wordFound = false
//     let wordLength = word.length
//     let top = 0
//     let bottom  = board.length - 1
//     let left = 0
//     let right = board[0].length - 1 
//     let trackedindices = {}
        


//     function traverse (i, j, k){

//         if (wordFound) return 
//         if (i < top || i > bottom) return
//         if (j < left || j > right) return 
//         if (k > wordLength - 1) return
//         if (board[i][j] !== word[k]) return
//         if ([i,j] in trackedindices) return

//         trackedindices[[i,j]] = "visited"

//         if (board[i][j] === word[k]){
//             if (k === wordLength -1){
//                 wordFound = true
//             }
//             k = k + 1
//         }

//         traverse(i, j+1, k)
//         traverse(i+1, j, k)
//         traverse(i, j-1, k)
//         traverse(i-1, j, k)

//         delete trackedindices[[i,j]]
    
//         return
//     }

//     for (let i = top; i <= bottom; i++){
//         for(let j = left; j <= right; j++){
//             if (board[i][j] === word[0]){
//                 if (wordLength === 1){
//                     return true
//                 }          
//                 traverse(i, j, 0)
//                 if (wordFound){
//                     return wordFound
//                 }
//             }
//         }
//     }

//     return wordFound
// };



let exist = function(board, word){
    let wordFound = false
    let wordLength = word.length
    let top = 0
    let bottom  = board.length - 1
    let left = 0
    let right = board[0].length - 1 
    // let trackedindices = {}
        


    function traverse (i, j, k){

        if (wordFound) return 
        if (i < top || i > bottom) return
        if (j < left || j > right) return 
        if (k > wordLength - 1) return
        if (board[i][j] !== word[k]) return
        // if ([i,j] in trackedindices) return

        // trackedindices[[i,j]] = "visited"
        

        if (board[i][j] === word[k]){
            if (k === wordLength -1){
                wordFound = true
            }
            board[i][j] = "1"
            k = k + 1
        }

        traverse(i, j+1, k)
        traverse(i+1, j, k)
        traverse(i, j-1, k)
        traverse(i-1, j, k)

        board[i][j] = word[k-1]
    
        return
    }

    for (let i = top; i <= bottom; i++){
        for(let j = left; j <= right; j++){
            if (board[i][j] === word[0]){
                if (wordLength === 1){
                    return true
                }          
                traverse(i, j, 0)
                if (wordFound){
                    return wordFound
                }
            }
        }
    }

    return wordFound

}

let board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
let word = "ABCEFSADEESE"

console.log(exist(board, word))