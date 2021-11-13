let setZeros = function(matrix){
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1

    let zeroPos = []


    function traverse (i, j, [rooti, rootj] , dir){
        if (i < top || i > bottom) return 
        if (j < left || j > right) return 

        if (dir === "R"){
            traverse(i, j+1, [rooti, rootj], dir)

            if (matrix[i][j] !==0){
                matrix[i][j] = 0
            }
            if (i !== rooti || j !== rootj) return
            if (i === rooti && j === rootj) dir = "D"
        }

        if (dir === "D"){
            traverse(i+1, j, [rooti, rootj], dir)

            if (matrix[i][j] !==0){
                matrix[i][j] = 0
            }
            if (i !== rooti || j !== rootj) return
            if (i === rooti && j === rootj) dir = "L"
        }

        if (dir === "L"){
            traverse(i, j-1, [rooti, rootj], dir)

            if (matrix[i][j] !==0){
                matrix[i][j] = 0
            }
            if (i !== rooti || j !== rootj) return
            if (i === rooti && j === rootj) dir = "U"
        }

        if (dir === "U"){
            traverse(i-1, j, [rooti, rootj], dir)

            if (matrix[i][j] !==0){
                matrix[i][j] = 0
            }
            if (i !== rooti || j !== rootj) return
            if (i === rooti && j === rootj) dir = "NA"
        }

        return
    }

    for (let i = top; i <= bottom; i++){
        for (let j = left; j <= right; j++){
            if(matrix[i][j] === 0){
                zeroPos.push([i,j])
            }
        }
    }

    let currentRoot = []

    for (let k = 0; k < zeroPos.length; k++){
        currentRoot = zeroPos[k]
        traverse(currentRoot[0], currentRoot[1], [currentRoot[0], currentRoot[1]], "R")
    }

    console.log(matrix)

}

let matrix = [[1,1,1],[1,0,1],[1,1,1]]
setZeros(matrix)