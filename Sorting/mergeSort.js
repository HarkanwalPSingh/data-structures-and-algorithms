function mergeSort (array){
    let left = 0
    let right = 0
    let output = []
    if (array.length === 1){
        return array
    }

    if (array.length % 2 === 0){
        left = array.slice(0,Math.ceil(array.length/2))
        right = array.slice(Math.ceil(array.length/2))
    } else {
        left = array.slice(0,Math.ceil(array.length/2))
        right = array.slice(Math.ceil(array.length/2))
    }

    left = mergeSort(left),
    right = mergeSort(right)
    output = merge(left, right)

    return output

}

function merge(left, right){
    let i = 0
    let j = 0
    let output = []

    if (right.length ===0){
        return left
    }

    while (i < left.length || j < right.length){
        console.log(i,j)
    
        if (i > left.length-1 && j < right.length){
            output.push(right[j])
            j++
        } else if (i < left.length && j > right.length-1){
            output.push(left[i])
            i++
        } else {
            if (left[i] < right[j]){
                output.push(left[i])
                i++
            } else {
                output.push(right[j])
                j++
            }
        }
    }
    return output
}


let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

console.log(mergeSort(array))