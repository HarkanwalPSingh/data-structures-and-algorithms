function gridTraveller (r, c, memo = {}){
    if ([r,c] in memo) return memo[[r,c]]
    if (r === 1 || c === 1) return 1

    memo[[r,c]] = gridTraveller(r, c-1, memo) + gridTraveller(r-1, c, memo)
    memo[[c,r]] = memo[[r,c]] 

    return memo[[r,c]]
}

console.log(gridTraveller(1000, 1000))