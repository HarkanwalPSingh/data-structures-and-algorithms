// let deleteNode = function(node){
//     let currentNode = node
//     let next = currentNode.next
//     let prev = null

//     while(currentNode){
//         if(next === null){
//             prev.next = null
//             return
//         }
//         currentNode.val = next.val
//         prev = currentNode
//         currentNode = next
//         next = currentNode.next
//     }
// }

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};