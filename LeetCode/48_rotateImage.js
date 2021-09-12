let rotate = function(matrix){
    let temp = 0
    let i = 0
    let j = 0

    while (i<matrix.length && j<matrix.length){
        if (j>i){
            temp  = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
        j++

        if(j === matrix.length){
            matrix[i].reverse()
            i++
            j=0
        }
    }

    return matrix 
}

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

console.log(rotate(matrix))