// let canCompleteCircuit = function(gas, cost){
//     if (gas.length === 1 && gas[0] >= cost[0]) return 0

//     let possibleStart = []
//     let start = 0
//     let gasCircuit = []
//     let costCircuit = []
//     let gasPresent = 0
//     let costReq = 0
    

//     for (let i = 0; i < gas.length; i++){
//         if (gas[i] > cost[i]){
//             start = i
//             gasCircuit = gas.slice(start).concat(gas.slice(0,start))
//             costCircuit = cost.slice(start).concat(cost.slice(0,start))
//             console.log(gasCircuit, costCircuit)

//             gasPresent = 0
//             costReq = 0

//             let j = 0
            
//             while(j < gasCircuit.length){
//                 gasPresent = gasCircuit[j] + gasPresent
//                 costReq = costCircuit[j]
//                 gasPresent = gasPresent - costReq

//                 console.log(gasPresent)

//                 if(j === gasCircuit.length - 1 && gasPresent >= 0) return start
//                 if(gasPresent <= 0) break
//                 j++
//             }
//         }  

//     }
//     return -1
// }


let canCompleteCircuit = function(gas, cost){
    let currentRemaining = 0
    let totalRemaining = 0
    let start = 0
    let remainining = 0

    for (let i = 0; i < gas.length; i++){
        remainining = gas[i] - cost[i]
        if (currentRemaining < 0){
            start = i
            currentRemaining = remainining
        } else {
            currentRemaining += remainining
        }
        totalRemaining += remainining
    }

    if (totalRemaining < 0) return -1
    else return start


}


let gas = [4]
let cost = [5]

console.log(canCompleteCircuit(gas, cost))