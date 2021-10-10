// let getSum = function(a, b){
//     let binaryA = a.toString(2)
//     let binaryB = b.toString(2)
//     let result = ""
//     let carry = 0
//     let prefix = ""
    
    
    
    
//     if (binaryA[0] !== "-" && binaryB[0] !== "-"){

       
         
//         for(let i = 0; i < Math.abs(binaryA.length - binaryB.length); i++){
//             prefix += "0"
//         }
//         if (binaryA.length < binaryB.length){
//             binaryA = prefix + binaryA
//         } else{
//             binaryB = prefix + binaryB
//         }
        
//         let pointer = binaryA.length-1
      


//         while(pointer >=0){
            

//             if (binaryA[pointer] === "1" && binaryB[pointer] === "1"){
//                 result = carry === "1" ? "1" + result : "0" + result  
//                 carry = "1"
//             }else if(binaryA[pointer] === "1" || binaryB[pointer] === "1"){
//                 if (carry === "1"){
//                     result = "0" + result
//                     carry = "1"
//                 }else {
//                     result = "1" + result
//                     carry = "0"
//                 }  
//             }else if (binaryA[pointer] === "0" && binaryB[pointer] === "0") {
//                 result = carry === "1" ? "1" + result : "0" + result 
//                 carry = "0"
//             }
    
//             if(pointer === 0 && carry==="1"){
//                 result = "1" + result
//             }

//             pointer--
//         }
//     }

//     if (binaryA[0] !== "-" || binaryB[0] !== "-")











//         return parseInt(result, 2)
// }


    


// console.log(getSum(1120, 110))


let getSum = function(a, b){
    
    function sum(num1, num2){
        let xor = num1 ^ num2
        let carry = ((num1 & num2) << 1)

        while(carry !==0){
            num1 = xor
            num2 = carry
            xor = num1 ^ num2
            carry = ((num1 & num2) << 1)
        }
        return xor
    }

    return sum(a, b)

}


console.log(getSum(-1120, -110))