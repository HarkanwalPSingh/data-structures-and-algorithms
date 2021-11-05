let cloneGraph = function(node){

    let hashMap = {}

    function dfs(node){

        if (node in hashMap){
            return hashMap[node]
        }

        let newNode = {
            val : node.val,
            neighbors: []
        }
        hashMap[[node]] = newNode

        for (let neighbor of node.neighbors){
            newNode.neighbors.push(dfs(neighbor))
        }

        return newNode

    }

    return node ? dfs(node) : null 
       
}