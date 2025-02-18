//Vowel or Consonant: Write a function that takes a single character (letter)
//as input and returns "vowel" or "consonant". (Handle uppercase and lowercase).

function checkVowelConsonant(char){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        return "Vowel";
    }else{
        return "Consonant";
    }
}
console.log(checkVowelConsonant("j"));
console.log(checkVowelConsonant("a"));
console.log(checkVowelConsonant("p"));
console.log(checkVowelConsonant("z"));
console.log(checkVowelConsonant("u"));
