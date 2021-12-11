var buildTree = function(inorder, postorder) {
    let root = new TreeNode(postorder[postorder.length-1])
    let left = inorder.slice(0, inorder.indexOf(root.val))
    let right = inorder.slice(inorder.indexOf(root.val) + 1)
    postorder.pop()

   function construct (root, postorder, left, right){
       if (postorder.length === 0) return 
       if (left.length === 0) root.left = null
       if (right.length === 0) root.right = null

       let nextNodeVal = postorder[postorder.length-1]
       
       if (right.indexOf(nextNodeVal) !== -1){
           let nextNode = new TreeNode(nextNodeVal)
           root.right = nextNode
           let newLeft = right.slice(0, right.indexOf(nextNodeVal))
           let newRight = right.slice(right.indexOf(nextNodeVal) + 1)
           postorder.pop()
           construct(nextNode, postorder, newLeft, newRight)
       }

       
       nextNodeVal = postorder[postorder.length-1]

       if (left.indexOf(nextNodeVal) !== -1){
           let nextNode = new TreeNode(nextNodeVal)
           root.left = nextNode
           let newLeft = left.slice(0, left.indexOf(nextNodeVal))
           let newRight = left.slice(left.indexOf(nextNodeVal) + 1)
           postorder.pop()
           construct(nextNode, postorder, newLeft, newRight)
       }

       return
   }

   construct(root, postorder, left, right)

   return root
};