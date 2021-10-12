let generate = function(numRows){
    output = [[1]]

    if (numRows === 1){
        output.push([1])
        return output
    }

    let prevRow = [1]
    let currentRow = []

    for (let i = 1; i < numRows; i++){
        let j = 1
        currentRow.push(1)
        while(j < prevRow.length){
            currentRow.push(prevRow[j-1] + prevRow[j])
            j++
        }
        currentRow.push(1)
        output.push(currentRow)
        prevRow = currentRow
        currentRow = []
    }
    return output
}