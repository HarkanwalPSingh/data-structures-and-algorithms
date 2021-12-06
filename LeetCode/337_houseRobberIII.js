let rob = function (root){

    function maxMoney(node){
        if (node === null) return [0,0]

        let totalMoney = [0,0]

        
        let leftMoney = maxMoney(node.left)
        let rightMoney = maxMoney(node.right)

        totalMoney[0] = node.val + leftMoney[1] + rightMoney[1]
        totalMoney[1] = Math.max(Math.max(...leftMoney) + Math.max(...rightMoney))

        return totalMoney
        
    }

    return Math.max(...maxMoney(root))

}