let findCircleNum = function(isConnected){

    let provinces = 0
    let n = isConnected.length
    let visited = {}

    function visit (cityIndex){
        if (cityIndex in visited){
            return 
        }

        visited[cityIndex] = true
        for (let i = 0; i < n; i++){
            if (isConnected[cityIndex][i] === 1 && !(i in visited)){
                visit(i)
            }
        }
        return 
    }

    for (let i = 0; i < n; i++){
        if (!(i in visited)){
            provinces++
            visit(i)
        }
        
    }
   
    return provinces

}

