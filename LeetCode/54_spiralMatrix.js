let spiralOrder = function(matrix){
    let output = []
    let top = 0
    let bottom = matrix.length-1
    let left = 0
    let right = matrix[0].length-1


    function spiral (x, y, top, bottom, left, right){
        if (top > bottom || left > right){
            return
        }

        if (top === bottom){
            for (let i = top, j = left; j <= right; j++){
                output.push(matrix[i][j])
            }
            return
        }

        if (left === right){
            for (let i = top, j = right; i <= bottom; i++){
                output.push(matrix[i][j])
            }
            return
        }

        

        for (let i = top, j = left; j <= right; j++){
            output.push(matrix[i][j])
        }

        for (let i = top + 1, j = right; i <= bottom; i++){
            output.push(matrix[i][j])
        }

        for (let i = bottom, j = right-1; j >= left; j--){
            output.push(matrix[i][j])
        }

        for (let i = bottom-1, j = left; i >= top+1; i--){
            output.push(matrix[i][j])
        }

        spiral(x+1, y+1, top + 1 , bottom - 1, left + 1, right - 1)

        return
    }

    spiral(0,0,top, bottom, left,  right)
    return output
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(spiralOrder(matrix))