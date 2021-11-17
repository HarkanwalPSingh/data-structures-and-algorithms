// Directed non-cyclic graph
let graph = {
    f: ["g","i"],
    g: ["h"], 
    h: [],
    i: ["g","k"],
    j: ["i"],
    k: []
}

let hasPath = function(graph, src, dst){
    if (src === dst) return true

    let ifExist = false

    for (let neighbor of graph[src]){
        ifExist = ifExist || hasPath(graph, neighbor, dst)
    }

    return ifExist
    
}

console.log(hasPath(graph, "f", "k"))