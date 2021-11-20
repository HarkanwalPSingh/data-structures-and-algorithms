let edges = [
["w", "x"],
["x", "y"],
["y", "z"],
["z", "v"],
["v", "w"]
]

let graph = {}

for (let edge of edges){
    let [a,b] = edge

    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []

    graph[a].push(b)
    graph[b].push(a)
}


let shortestPath = function (graph, src, dst){
    let visited = new Set()
    let queue = []
    queue.push([src, 0])
    let current = null

    while(queue.length > 0){
        current = queue.shift()
        if (current[0] === dst) return current[1]
        visited.add(current[0])

        for(let neighbor of graph[current[0]]){
            if (visited.has(neighbor)) continue
            visited.add(neighbor)
            queue.push([neighbor, current[1] + 1])
        }

    }

    return -1

}

console.log(shortestPath(graph, "w", "x"))