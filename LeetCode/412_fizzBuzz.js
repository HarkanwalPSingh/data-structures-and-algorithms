let fizzBuzz = function(n){
    let i = 1
    let results = []

    while(i<=n){

        if(i%15 === 0){
        results.push("FizzBuzz")
        } else if (i%3 === 0){
            results.push("Fizz")
        } else if (i%5 === 0){
            results.push("Buzz")
        }else {
            results.push(i)
        }
        i++
    }
    return results
}