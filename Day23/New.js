let num=1234;
function squareDigit(num){
    let num1=0;
    while(num>0){
        num1*=10;
        num1+=(num%10);
        num=Math.floor(num/10);
        
    }
    return num1
}
console.log(squareDigit(num))