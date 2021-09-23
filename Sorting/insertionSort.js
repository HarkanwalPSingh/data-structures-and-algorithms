const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(array){
    let temp = 0

    for (let i = 1; i < array.length; i++){

        for (let j = 0; j < i; j++){
            if (array[i]<array[j]){
                temp = array[i]
                array.splice(i,1)
                array.splice(j, 0, temp)
            }
        }
    }
    return array
}

console.log(insertionSort(numbers))