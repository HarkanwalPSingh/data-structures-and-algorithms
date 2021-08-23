// Have the function LongestWord(sen) take the sen parameter being passed and
// return the longest word in the string. If there are two or more words that
// are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty. Words may also 
// contain numbers, for example "Hello world123 567"

// ASCII code range for capital letters is [65,90] and for small letters is [97,122]


// Solution 1: 

function LongestWord(sen) { 
    let currentWord = ""
    let maxWord = ""
    let currentLetter = ""
    let currentLetterAscii = 0

    for (i = 0; i < sen.length; i++){
        currentLetter = sen[i]
        currentLetterAscii = currentLetter.charCodeAt(0)

        if ((currentLetterAscii >= 65 && currentLetterAscii <=90) || (currentLetterAscii >= 97 && currentLetterAscii <=122)){
        currentWord = currentWord + currentLetter
        }  else if (currentLetterAscii === 32){
            currentWord = ""
        }
        if (currentWord.length > maxWord.length){
            maxWord = currentWord
        }
    }

    return maxWord; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(""));