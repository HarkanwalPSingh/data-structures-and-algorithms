let reverseAString  = function(str){

if (!str || str.length<1 || typeof(str) !== "string"){
    return "Please input a proper string"
}

let reversedString = ""

for (i = str.length-1; i >= 0; i--){
    reversedString = reversedString + str[i]
}
return reversedString

}

console.log(reverseAString(""))
