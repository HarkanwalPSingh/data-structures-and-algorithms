// let combine = function(n,k){
//     let processed = {}
//     let combinationsAdded = {}
//     let output = []

//     function combinations(array){
//         if (array.length === k){
//             if (!(array in combinationsAdded)){
//                 combinationsAdded[[...array]] = "added"
//                 output.push(array)
//             }
//             return
//         }

//         let newArray = null

//         for (let i = 0; i < array.length; i++){
//             newArray = array.slice(0,i).concat(array.slice(i+1))

//             if (!(newArray in processed)){
//                 processed[[...newArray]] = "processed"
//                 combinations(newArray)
//             }

//         }
//         return
//     }

//     let array = []
//     for (let i = 1; i <= n; i++){
//         array.push(i)
//     }
//     combinations(array)
    
//     return output
// }

let combine = function(n,k){
    let output = []

    function combinations(start, comb){
        if (comb.length === k){
            output.push(comb.slice())
            return
        }

       
        for (let i = start; i <= n; i++){
            comb.push(i)
            combinations(i+1, comb)
            comb.pop()
        }
        return
    }

    combinations(1, [])
    
    return output
}

console.log(combine(4,2))