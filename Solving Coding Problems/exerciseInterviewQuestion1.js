
function hasCommon(array1, array2){
    if (array1.length == 0 || array2.length == 0){
        return false
    }

    for (i = 0; i < array2.length; i ++){
        if (array1.includes(array2[i])){
            return true
        }
    }
    return false
}

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

// console.log(hasCommon(array1, array2))
// O(1) Space Complexity
// O(a * log2b)


function hasCommon2 (arr1, arr2){
// Loop through first array and create object (also called hash tables) where propoerties === items in the array

let map = {}
for (let i=0; i<arr1.length; i++){
    if(!map[arr1[i]]){
        const item = arr1[i]
        map[item] = true
    }
}

// Loop through second array and check if item in second array exists on created object.

for (let j = 0; j< arr2.length; j++){
    if (map[arr2[j]]){
        return true
    }
}
return false
// O(a+b) Time complexity
// O (a) Space complexity 
}

console.log(hasCommon2(array1, array2))