function main(){
    let num1=10;
    let num2=20;

     console.log("Summation of "+num1+" and "+num2+" with the old method "+traditionalFunction(num1,num2))

     const newFunction=(num1,num2)=> num1+num2;
      
     console.log("Summation of "+num1+" and "+num2+" with the new method "+newFunction(num1,num2))

}
main();

function traditionalFunction(num1,num2){
     return num1+num2
} 


///////////////////////Spread Opertaor////////////////////////////////////

let array1=[2,3,4];
let array2=[5,6,7];
let combined=[...array1, ...array2];
console.log(combined);

