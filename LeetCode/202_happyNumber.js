let isHappy = function(n){
    let hashMap = {}
    n = n.toString()

    function checkHappy(n){
        if (n === "1"){
            return true
        }

        let resultantN = 0
        for (let i = 0; i < n.length; i++){
            resultantN += parseInt(n[i], 10) * parseInt(n[i], 10)
        }

        n = resultantN.toString()

        if (n in hashMap) {
            return false
        }
        else {
            hashMap[n] = n
            return checkHappy(n)
        }
    }
    return checkHappy(n)

}