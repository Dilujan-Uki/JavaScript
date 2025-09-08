//Find Vowel or Not
function findVowel(letter){
    if(letter=="a" || letter=="e" || letter=="i" ||letter=="o" || letter=="u"|| letter=="A"|| letter=="E"|| letter=="I"|| letter=="O"|| letter=="U"){
        return letter+ " : Is a vowel";
    }
    else{
        return letter+ " : Is not a vowel";
    }
}
console.log(findVowel("A"));

   