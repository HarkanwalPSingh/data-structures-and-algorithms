let dailyTemperatures = function(temperatures){
    let tempMap = {}
    let result = []
    let dayDiff = temperatures.length

    for (let i = temperatures.length -1; i >= 0; i--){
        if (i === temperatures.length - 1){
            result.push(0)
            tempMap[temperatures[i]] = i
        } else if (temperatures[i] < temperatures[i+1]){
            result.push(1)
            tempMap[temperatures[i]] = i
        } else {
            for (let j = temperatures[i] + 1; j <=100; j++){
                if(j in tempMap){
                    dayDiff = Math.min(dayDiff, tempMap[j] - i)
                }
            }
            if (dayDiff === temperatures.length){
                result.push(0)
            } else {
                result.push(dayDiff)
            }
            dayDiff = temperatures.length
            tempMap[temperatures[i]] = i
        }        
    }

    return result.reverse()
}

let temperatures = [73,74,75,71,69,72,76,73]

console.log(dailyTemperatures(temperatures))