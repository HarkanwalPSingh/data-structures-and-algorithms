let graph = {
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}

function connectedComp(graph) {
    let count = 0
    let visited = new Set()

    function dfs (node){
        if (graph[node].length === 0) return false
        if (visited.has(node)) return false

        visited.add(node)

        for (let neighbor of graph[node]){
            dfs(neighbor.toString())
        }

        return true
    }

 

    for (let node in graph){
        console.log(visited)
        if(dfs(node.toString())) count++
    }

    return count
}

console.log(connectedComp(graph))