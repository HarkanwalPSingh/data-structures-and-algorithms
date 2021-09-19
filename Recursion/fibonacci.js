function fibonacciIterative (n){ //O(n)
    let sequence = [0, 1]

    for (let i = 2; i < n+1; i++){
        sequence.push(sequence[i-1] + sequence[i-2])
    }

    return sequence[n] 
}

// console.log(fibonacciIterative(11))

function fibonacciRecursion(n){ // O(2^n)
    if (n === 0){
        return 0
    } else if (n === 1){
        return 1
    }

    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2)
}

console.log(fibonacciRecursion(2))