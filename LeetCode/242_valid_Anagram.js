let isAnagram = function(s, t){
    hashMap = {}

    s.split("").forEach(element => {
        if(element in hashMap){
            hashMap[element] += 1
        }else {
            hashMap[element] = 1
        }
    });

    for (let i = 0; i < t.length; i++){
        if (!(t[i] in hashMap)){
            return false
        } else {
            hashMap[t[i]] -= 1
            if (hashMap[t[i]] === 0){
                delete hashMap[t[i]]
            }
        }
    }
    return true

}