// O(n * sorting algorithm time complexity)

let groupAnagrams = function(strs){

    let hashMap = {}
    let str = 0

    for (let i = 0; i < strs.length; i++){
        str = strs[i]
        str = str.split("").sort().join("")

        if (str in hashMap){
            hashMap[str].push(strs[i])
        } else {
            hashMap[str] = []
            hashMap[str].push(strs[i])
        }
    }

    return Object.values(hashMap)
}


// let groupAnagrams = function(strs){

//     let hashMap = {}
//     let str = 0
//     let code = 1

//     for (let i = 0; i < strs.length; i++){
//         code = 1
//         str = strs[i]
//         str = str.split("")

//         for (let i = 0; i < str.length; i++){
//             code *= str[i].charCodeAt(0)
//         }


//         if (code in hashMap){
//             hashMap[code].push(strs[i])
//         } else {
//             hashMap[code] = []
//             hashMap[code].push(strs[i])
//         }
//     }

//     return Object.values(hashMap)
// }

let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))