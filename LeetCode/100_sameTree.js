let isSameTree = function(p,q){
  
    let hashMap = {}

    function inorderTraversal(node1, node2){
        let [output1, output2] = [0,0]
        if (!node1 && !node2){
            return true
        }
        if(!node1 || !node2 || node1.val !== node2.val){
            return false
        }

        output1 = inorderTraversal(node1.left, node2.left)
        output2 = inorderTraversal(node1.right, node2.right)
        if ((node1.val !== node2.val) || output1 === false || output2 === false){
            hashMap["false"] = [node1.val, node2.val]
        }

        return 
    }

    if (!p && !q){
        return true
    } else if (!p || !q){
        return false
    }

    inorderTraversal(p, q)

    if ("false" in hashMap){
        return false
    }else {
        return true
    }
    
}