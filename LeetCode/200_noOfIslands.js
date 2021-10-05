// let numIslands = function(grid){
//     let consecutiveIslands = []
//     let m = grid.length
//     let n = grid[0].length
//     let output = 0

//     for (let i = 0; i < m; i++){
//         consecutiveIslands[i] = []
//         let lands = ""
        
//         for (let j = 0; j < n; j++){
//             let current = grid[i][j]

//             if (current === "1") lands += j.toString()
//             if (current === "0") lands += " "
//         }

//         consecutiveIslands[i] = lands.split(" ").filter(element => {
//             if (element !== " ") return element
//         })
//         output += consecutiveIslands[i].length 
//     }

//     if (output === 0){
//         return output
//     }

//     console.log(consecutiveIslands)
//     let current = []
//     let bottom = []
//     let currentRow = 0
//     let commonConnection = {}

//     while(currentRow < m-1){
//         current = consecutiveIslands[currentRow]
//         bottom = consecutiveIslands[currentRow + 1]

//         for (let i = 0; i < current.length; i++){

//             for (let j = 0; j < bottom.length; j++){
                
//                 if (bottom[j] in commonConnection){
//                     continue
//                 }

//                 let landConnection = current[i].match(new RegExp('[' + bottom[j] + ']'))
//                 if (landConnection !== null && bottom.length === 1){
//                     output -= 1
//                     commonConnection[bottom[j]] = bottom[j]
//                 } else if (landConnection !==null){
//                     output -= 1
//                 }

//             }
//         }
//         commonConnection = {}
//         currentRow++
//     }

// return output
// }

// let grid = 
// [["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]]

// console.log(numIslands(grid))


let numIslands = function(grid){
    let noOfIslands = 0
    let m = grid.length
    let n = grid[0].length

    function traverse (i,j){

        if (grid[i] ===  undefined || grid[i][j] === undefined){
            return
        }

        if (grid[i][j] === "0" || grid[i][j] === "2"){
            return 
        }
        
        if (grid[i][j] === "1"){
            grid[i][j] = "2"
            traverse(i,j+1)
            traverse(i-1,j)
            traverse(i,j-1)
            traverse(i+1,j)
            return
        }
        
    }

    for (let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if (grid[i][j] === "1"){
                noOfIslands += 1
                traverse(i,j)
            }
        }
    }
    // console.log(grid)

    return noOfIslands
}

let grid = 
[["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]]

console.log(numIslands(grid))