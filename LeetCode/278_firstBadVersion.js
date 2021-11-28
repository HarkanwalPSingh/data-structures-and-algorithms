let firstBadVersion = function(n){
    let l = 1
    let r = n
    let mid = null

    while(l < r){
        mid = Math.floor((l+r)/2)

        if(isBadVersion(mid)){
            r = mid
        } else {
            l = mid + 1
        }
    }
    return r
}