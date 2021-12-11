let canFinish = function(numCourses, prerequisites){
    let graph = {}

    for (let i = 0; i < numCourses; i++){
        graph[i] = []
    }

    for (let req of prerequisites){
        graph[req[0]].push(req[1])
    }
    
    let memo = {}

    function isCyclic (graph, course, courseUndertaken = {}){
        if (course in memo) return memo[course]
        if (course in courseUndertaken) return true
        if (graph[course].length === 0) return false

        courseUndertaken[course] = "Done"

        for (let neighbor of graph[course]){
            if (isCyclic(graph, neighbor, courseUndertaken)){
                memo[course] = true
                return true
            }
        }

        delete courseUndertaken[course]

        memo[course] = false
        return false 

    }

    for (let req of prerequisites){
        if (isCyclic(graph, req[0])) return false 
    }

    return true

}