// let rightSideView = function(root){
//     let queue = []
//     let levelOrder = [[]]
//     level = 0
//     let output = []
//     let currentNode = root
//     if(!currentNode){
//     return output
//     }
//     queue.push(currentNode)
//     queue.push(null)

//     while(queue.length !==1){

//         if (queue[0] === null){
//             queue.shift()
//             queue.push(null)
//             output.push(levelOrder[level][levelOrder[level].length-1])
//             level++
//             levelOrder[level] = []
//         }
        
//         if (queue[0].left){
//             queue.push(queue[0].left)
//         }
        
//         if (queue[0].right){
//             queue.push(queue[0].right)
//         }
        
//         levelOrder[level].push(queue.shift().val)
//     }
//     output.push(levelOrder[level][levelOrder[level].length-1])
//     return output
     
// }



let rightSideView = function(root){
    let queue = []
    let levelOrder = []
    let output = []
    let currentNode = root
    if(!currentNode){
    return output
    }
    queue.push(currentNode)
    queue.push(null)

    while(queue.length !==1){

        if (queue[0] === null){
            queue.shift()
            queue.push(null)
            output.push(levelOrder[levelOrder.length-1])
        }
        
        if (queue[0].left){
            queue.push(queue[0].left)
        }
        
        if (queue[0].right){
            queue.push(queue[0].right)
        }
        
        levelOrder.push(queue.shift().val)
    }
    output.push(leveOrder[levelOrder.length-1])
    return output
     
}
