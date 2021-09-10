let shiftingLetters = function(s, shifts){
    const sumOfShifts = shifts.reduce((accumulator, currentValue) => accumulator + currentValue)
    let shiftsForEachIndex = sumOfShifts
    let shiftedString = ""
    let shiftedCharAsciiCode = 0
    let shiftsReq = 0


    for (let i=0; i<s.length; i++){
        shiftedCharAsciiCode = s.charCodeAt(i) + shiftsForEachIndex

        if(shiftedCharAsciiCode > 122){
            shiftsReq = (shiftedCharAsciiCode - 122)%26 === 0? 26: (shiftedCharAsciiCode - 122)%26
            shiftedCharAsciiCode = shiftsReq + 96
        }

        shiftedString = shiftedString + String.fromCharCode(shiftedCharAsciiCode) 
        shiftsForEachIndex = shiftsForEachIndex - shifts[i]
    }

    return shiftedString
}


const shifts = [52]
const s = "z"
console.log(shiftingLetters(s, shifts))