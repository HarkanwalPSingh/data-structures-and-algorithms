let numUniqueEmails = function(emails){
    let hashMap = {}

    emails.forEach(email => {
        let localName = email.split("@")[0]
        let domainName = email.split("@")[1]

        localName = localName.split(".").join("").split("+")[0]

        hashMap[localName + "@" + domainName] = email
    })
    return Object.keys(hashMap).length
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))