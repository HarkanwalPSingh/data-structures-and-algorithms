let reverseBits =function(n){
    let reversed = 0
    n = n.toString(2)
    
    let prefix = ""
    
    for (let i = 0; i < 32-n.length; i++){
        prefix += "0"
    }
    n = prefix + n

    for (let i = 0; i<n.length; i++){
       
        reversed += Number(n[i])*Math.pow(2, i)
    }
    return reversed
}