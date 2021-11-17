// Directed non-cyclic graphs
const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
}

let depthFirstPrintIterative = function(graph, source){
    let stack = [source]

    while(stack.length > 0){
        let current = stack.pop()
        console.log(current)

        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
}

let depthFirstPrintRecursive = function(graph, source){

    console.log(source)

    for (let neighbor of graph[source]){
        depthFirstPrintRecursive(graph, neighbor)
    }

    return
}

// depthFirstPrintIterative(graph, "a")
depthFirstPrintRecursive(graph, "a")
