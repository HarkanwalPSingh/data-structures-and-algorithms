const nemo = ["nemo"]
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"] 
const large = new Array(10000).fill("nemo")

function findNemo(array){
    // let t0 = new Date().getTime()
    for (let i = 0; i<array.length; i++){
        if (array[i] === "nemo"){
            console.log("Found Nemo!")
            break // Break out of the loop when Nemo is found
        }
    }
    // let t1 =new Date().getTime()
    // console.log("Call to find Nemo took " + (t1-t0) + " milliseconds")
}

// findNemo(large) // O(n) --> Linear Time

const boxes = [1,2,3,4,5,6,7,8,9,0]
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]) // O(1)
    console.log(boxes[1]) // O(1)
}

// logFirstTwoBoxes(boxes) // O(2)


// Log all pairs of array

function logPairs(array){
    for(let i=0; i<array.length; i++){ //O(n)
        for(let j=0; j<array.length; j++){ //O(n)
            console.log("(" + array[i] + ", " + array[j] + ")")
        }
    }
}

logPairs(boxes) // O(n*n)


// There are 4 key points to note for Big O notation. 
// 1. Worst case scenario. 
// 2. Ignore constats. 
// 3. Use different notations for different inputs. 
// 4. Ignore non-dominant