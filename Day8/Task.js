//Search for an element in the array and return its index.
let num = [15,27,39,40,53,67,40];
function returnIndex(num,value){
    for( let i=0; i<num.length;i++){
         if(num[i]===value){
            return i;
         }
    }
    return "Invalid Index ";
}
  console.log(returnIndex(num, 40));


//Calculate the average of the elements.
function average(num){
    let sum = 0
    for(let i=0; i<num.length; i++){
        sum += num[i];
    }
   console.log("Average is "+ sum/num.length);
}
average(num);

//Write a function reverseArray() that reverses the order of the elements.

//Write afunction exists(element) that prints true if the element is present, otherwise false.

//Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not.

//Write a function sumOfDigi(number) that prints the sum of the given number.
function sumOfDigi(num1,num2){
     console.log(num1+num2);
}
sumOfDigi(1,2);





