let num1 = 20;
let num2 = 10;
let num3 = 50

function Add(a,b){
    console.log("Addition = "+(a+b));
}

function Subtract(a,b){
    console.log("Subtract = "+(a-b));
}

function Divide(a,b){
    console.log("Divide = "+(a/b));
}

function Multiply(a,b){
    console.log("Multiply = "+(a*b));
}

function All(){
    Add(num1,num2);
    Subtract(num1,num2);
    Multiply(num1,num2);
    Divide(num1,num2);
    Add(num1,num3);
}
All()