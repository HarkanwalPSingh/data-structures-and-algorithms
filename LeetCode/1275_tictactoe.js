let tictactoe = function(moves){
    if (moves.length < 5){
        return "Pending"
    }

    let ifWon = function(playerMoves){
        let noMatch = "Pending"

        if (([0,0] in playerMoves) && ([1,1] in playerMoves) && ([2,2] in playerMoves)){
            return playerMoves[[0,0]]
        } else if (([2,0] in playerMoves) && ([1,1] in playerMoves) && ([0,2] in playerMoves)){
            return playerMoves[[2,0]]
        } else if (([0,0] in playerMoves) && ([0,1] in playerMoves) && ([0,2] in playerMoves)){
            return playerMoves[[0,0]]
        } else if (([1,0] in playerMoves) && ([1,1] in playerMoves) && ([1,2] in playerMoves)){
            return playerMoves[[1,0]]
        } else if (([2,0] in playerMoves) && ([2,1] in playerMoves) && ([2,2] in playerMoves)){
            return playerMoves[[2,0]]
        } else if (([0,0] in playerMoves) && ([1,0] in playerMoves) && ([2,0] in playerMoves)){
            return playerMoves[[0,0]]
        } else if (([0,1] in playerMoves) && ([1,1] in playerMoves) && ([2,1] in playerMoves)){
            return playerMoves[[0,1]]
        } else if (([0,2] in playerMoves) && ([1,2] in playerMoves) && ([2,2] in playerMoves)){
            return playerMoves[[0,2]]
        }

        return noMatch

    }

    let AMoves = {}
    let BMoves = {}

    if (moves.length%2 === 0){
        for (let i = 1; i<moves.length; i = i + 2){
            BMoves[moves[i]] = "B"
        }
        let result = ifWon(BMoves)

        if (moves.length === 9 && result !== "B"){
            return "Draw"
        } else {
            return result
        }

    } else {
        for (let i = 0; i<moves.length; i = i + 2){
            AMoves[moves[i]] = "A"
        }
        let result = ifWon(AMoves)

        if (moves.length === 9 && result !== "A"){
            return "Draw"
        } else {
            return result
        }
    }

    
}

let moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]

console.log(tictactoe(moves))