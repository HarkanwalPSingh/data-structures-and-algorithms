let convert = function(s, numRows){
    let output = []
    let i = 0
    let r = 0
    let forward = true
    let backward = false

    if (numRows === 1){
        return s
    }

    for(let i = 0; i < numRows;i++ ){
        output[i] = ""
    }

   while (i < s.length){  
         
        output[r] = output[r] + s[i]
        i++

        if (forward){
            r++
        } else if(backward){
            r--
        }

        if (r===0){
            forward = true
            backward = false
        } else if(r===numRows-1){
            forward = false
            backward = true
        }
     
   }
    return output.join("")
}

console.log(convert("PAYPALISHIRING", 4))