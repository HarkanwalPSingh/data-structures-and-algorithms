let mergeSortedArrays = (array1, array2) => {
    let totalLength = array1.length + array2.length
    let array1Index = 0
    let array2Index = 0
    const sortedArray = []

    for (i = 0; i < totalLength; i++){
        if (array1[array1Index] < array2[array2Index] && array1Index < array1.length && array2Index < array2.length ){
            sortedArray.push(array1[array1Index])
            array1Index++
        }else if(array1[array1Index] > array2[array2Index] && array1Index < array1.length && array2Index < array2.length ){
            sortedArray.push(array2[array2Index])
            array2Index++
        }else if (array1[array1Index] === array2[array2Index] && array1Index < array1.length && array2Index < array2.length){
            sortedArray.push(array1[array1Index])
            array1Index++
            sortedArray.push(array2[array2Index])
            array2Index++
        }else if (array1Index == array1.length && array2Index < array2.length){
            sortedArray.push(array2[array2Index])
            array2Index++
        }else if (array2Index == array2.length && array1Index < array1.length){
            sortedArray.push(array1[array1Index])
            array1Index++
        }
    }
    return sortedArray
}

let array1 = [1,3,6,7,38,298]
let array2 = []

console.log(mergeSortedArrays(array1, array2))