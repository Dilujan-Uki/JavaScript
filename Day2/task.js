//Question1

var num = 1;
function NumberCheck(num){
    if( num >= 1){
        return "Positive";
    }
    else if( num = 0){
        return "Zero" ;
    }
    else if( num < 0 ){
        return "Negative";
    }
}
console.log(NumberCheck(num));
 
//Question2

var age = 18
function AgeCheck(age){
    if ( age >= 18 ){
        return "You can vote"
    }
    else{
        return "You can't vote"
    }
}
console.log(AgeCheck(age))

//Question3

var num1 = 1
function CheckOddOrEven(num1){
    if ( num1%2){
        return "Odd";
    }
    else{
        return "Even";
    }
}
console.log(CheckOddOrEven(num1));

//Question4

var num2 = 5
function CheckDivisible(num2){
    if ( num2%5){
        return "Divisible by 5";
    }
    else{
        return "Not Divisible by 5";
    }
}   
console.log(CheckDivisible(num2));


