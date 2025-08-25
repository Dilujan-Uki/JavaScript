//Question1

var num1 = 50;
var num2 = 40;
var num3 = 30;
function LargestNumber(num1, num2, num3){
    if ( num1 > num2 && num1>num3){
        return  num1;
    }
    else if ( num2 > num1 && num2>num3){
        return  num2;
    }
    else {
        return  num3;
    }
}
console.log(LargestNumber(num1, num2, num3));

//Question2 

var year = 2024;
function CheckYear(year){
    if ( year%4 == 0 ){
        return year+" Leap Year";
    }
    else {
        return year+" Not a Leap Year";
    }
}
console.log( CheckYear(year))

//Question3

var letter = "a"
function CheckVowelOrConsonant(letter){
    if( letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u"){
        return letter+" is Vowel"
    }
    else{ 
        return "is Consonant"
    }
}
console.log(CheckVowelOrConsonant(letter))

