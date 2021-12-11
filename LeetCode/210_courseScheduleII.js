let findOrder = function (numCourses, prerequisites){
    let graph = {}

    for (let i = 0; i < numCourses; i++){
        graph[i] = []
    }

    for (let req of prerequisites){
        graph[req[0]].push(req[1])
    }
    
    let memo = {}
    let added = {}
    let result = []

    function isCyclic (graph, course, courseUndertaken = {}){
        if (course in memo) return memo[course]
        if (course in courseUndertaken) return true
        if (graph[course].length === 0){
            if (!(course in added)){
                result.push(course)
                added[course] = "added"
            } 
            return false  
        } 

        courseUndertaken[course] = "Done"

        for (let neighbor of graph[course]){
            if (isCyclic(graph, neighbor, courseUndertaken)){
                memo[course] = true
                return true
            }
        }

        delete courseUndertaken[course]

        memo[course] = false
        if (!(course in added)){
                result.push(course)
                added[course] = "added"
            }
        return false 

    }
    

    for (let i = 0; i < numCourses; i++){
        if (isCyclic(graph, i)) return []
        if (i in added) continue 
        result.push(i)
        added[i] = "added"
    }

    return result 
}