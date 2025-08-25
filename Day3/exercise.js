//Question1

var num1 = 9;
function CheckPrimeNumberOrNot(a){
    if(a==1 ){
        return num1+ " is Not a Prime Number";
    } 

    else if (a%2 && a%3 && a%5){
        return num1+ " is  Prime Number";
    }
    else if (a==2 || a==3 || a==5){
        return num1+ " is Prime Number";
    }
    else{
        return num1+ " is Not a Prime Number";
    }
}
console.log(CheckPrimeNumberOrNot(num1));

//Question2

var amount = 10000;
function Discount(a){
    if( a>5000){
        return a-a/20+" after discount";
    }
    else if(a>2000){
        return a-a/10+" after discount";
    }
    else {
        return "no discount";
    }
}
console.log(Discount(amount));

//Question3

var weight = 55;
var height = 156;
function CheckBMI(a,b){
    if((a/(b*b))<=18.5){
        return "you are underweight";
    }
    else if(24.9>=(a/(b*b))>=18.5){
        return"you are normal";
    }
    else if (25>=(a/(b*b))>=29.9){
        return "You are over weight";
    }
    else if (30>=(a/(b*b))>=34.9){
        return "You are obese";
    }
}
console.log(CheckBMI(weight,height));

//Qusetion4

var grade = 90
function Grading(a){
    if(a>=90 && a<=100){
        return "A";
    }
    else if(a>=75){
        return "B";
    }
    else if(a>=50){
        return "C";
    }
    else if(a<50){
        return "F";
    }

    }
    console.log(Grading(grade));    
