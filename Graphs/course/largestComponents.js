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
    let size = 0
    let maxSize = 0
    let visited = new Set()

    function dfs (node){
        if (graph[node].length === 0) return 
        if (visited.has(node)) return 

        visited.add(node)
        size = size + 1

        for (let neighbor of graph[node]){
            dfs(neighbor.toString())
        }

        return 
    }


    for (let node in graph){
        size = 0
        dfs(node)
        maxSize = Math.max(size, maxSize)
    }

    return maxSize
}

console.log(connectedComp(graph))