// Edge list. Convert it into adjacency list. 

let edges = [
    ["i", "j"], 
    ["k", "i"],
    ["m", "k"], 
    ["k", "l"],
    ["o", "n"]
]

let undirectedPath = function(edges, nodeA, nodeB){
    let graph = buildGraph(edges)

    function buildGraph(edges){
        const graph = {}
        for(let edge of edges){
            let [a, b] = edge

            if(!(a in graph)) graph[a] = []
            if(!(b in graph)) graph[b] = []

            graph[a].push(b)
            graph[b].push(a)


        }
        return graph
    }

    let visited = {}

    function hasPath(graph, src, dst){
        if (src === dst) return true
        
        let ifPathExist = false

        for(let neighbor of graph[src]){
            if (!(neighbor in visited)){
                visited[neighbor] = true
                ifPathExist = ifPathExist || hasPath(graph, neighbor, dst)
            }
        }

        return ifPathExist

    }


    return hasPath(graph, nodeA, nodeB)

}

console.log(undirectedPath(edges, "o", "n"))