// let zigzagLevelOrder = function(root){
//     if (!root){
//         return []
//     }
    
//     let output = []
//     let queue = []
//     let level = 0
//     queue.push(root)
//     queue.push(null)
//     output[level] = []


//     while(queue.length !== 0){
//         currentNode = queue.shift()

//         if(currentNode === null && queue.length === 0) 
//         {
//             if (level %2 === 1){
//                 output[level] = output[level].reverse()
//             }  
//             break   
//         }
        
//         if (currentNode === null){
            
//             if (level %2 === 1){
//                 output[level] = output[level].reverse()
//             }


//             level++
//             output[level] = []
//             queue.push(null)
//         } else {
//             output[level].push(currentNode.val)
//             if (currentNode.left){
//                 queue.push(currentNode.left)
//             }
//             if (currentNode.right){
//                 queue.push(currentNode.right)
//             }

//         }

        

//     }
//     return output
// }


let zigzagLevelOrder = function(root){
    if (!root){
        return []
    }
    
    let output = []
    let queue = []
    let level = 0
    queue.push(root)
    queue.push(null)
    output[level] = []


    while(queue.length !== 0){
        currentNode = queue.shift()

        if(currentNode === null && queue.length === 0) 
        {
            break   
        }
        
        if (currentNode === null){
            level++
            output[level] = []
            queue.push(null)
        } else {

            if (level % 2 === 1){
                output[level].unshift(currentNode.val)
            } else {
                output[level].push(currentNode.val)
            }

            if (currentNode.left){
                queue.push(currentNode.left)
            }
            if (currentNode.right){
                queue.push(currentNode.right)
            }

        }    

    }
    return output
}