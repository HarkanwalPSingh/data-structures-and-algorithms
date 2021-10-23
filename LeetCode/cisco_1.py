def groupDivision(levels, maxSpread){
    if (maxSpread == 0):
        return len(levels)

    levels.sort()

    groups = 1
    group_min = levels[0]
    group_max = levels[0] + maxSpread

    for level in levels: 
        if (level > group_max):
            group_min = level
            group_max = level + maxSpread
            groups = groups + 1

    return groups

    
}


def no_of_ways(warehouse):
    no_of_ways = 0

    def ways(i,j):
        if(i == m-1 and j == n-1):
            no_of_ways = no_of_ways + 1
            return 

        if (i == m):
            ways(i, j+1)
        elif (j == n):
            ways(i+1, j)
        else:      
            ways(i+1, j)
            ways(i, j+1)

        return

        

        
