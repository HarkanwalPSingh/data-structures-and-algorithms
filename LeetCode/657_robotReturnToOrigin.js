let judgeCircle = function(moves){
    let pos = [0,0]

    for (let i of moves){
        if (i === "U") pos[1]++
        if (i === "D") pos[1]--
        if (i === "L") pos[0]--
        if (i === "R") pos[0]++
    }

    if (pos === [0,0]) return true
    else return false

}