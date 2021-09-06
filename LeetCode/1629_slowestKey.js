let slowestKey = function(releaseTimes, keysPressed){
    if (releaseTimes.length === 0){
        return ""
    }
    
    let key = keysPressed[0]
    let keyTime = releaseTimes[0]
    let currentKey = ""
    let currentKeyTime = 0

    for(i = 1; i < releaseTimes.length; i++){
        currentKey = keysPressed[i]
        currentKeyTime = releaseTimes[i] - releaseTimes[i-1]

        console.log(key, currentKey, currentKeyTime)
        if(currentKeyTime > keyTime){
            key = currentKey
            keyTime = currentKeyTime
        } else if(currentKeyTime === keyTime){
            key = currentKey > key ? currentKey : key
        }
    }

    return key
}

const releaseTimes = [28,65,97] 
const keysPressed = "gaf"
console.log(slowestKey(releaseTimes, keysPressed))