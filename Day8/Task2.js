//Other methods for task.js
let arrayx=[50,20,30,4,78,45,10,82,10];
function findIndexInArray(array,num){
    let index="";
    for(let i=0; i<array.length;i++){
        if(array[i]==num){
            index+=(i+", ")
        }
    }
    return index;

}

let indexValue = findIndexInArray(arrayx, 10)
if(indexValue=="")
    console.log("The number isn't found");
else{
   console.log("The number is available in "+indexValue+"Index slot")    
}
//find the average
function findTheAvgOfArray(array){
    let sum=0, avg=0;
    for(let i=0; i<array.length;i++){
        sum+=array[i]
    }
    avg = sum/array.length
    return avg;
}
console.log("The average of the array is "+findTheAvgOfArray(arrayx));
//reverse array
function reverseArray(array){
    let revArray=[];
    for(let i=array.length-1; i>=0;i--){
        revArray.push(array[i]);
    }
    return revArray;
}
console.log("The original array values are "+arrayx);
console.log("The reversed array values are "+reverseArray(arrayx));

//Write afunction exists(element) that prints true if the element is present, otherwise false.
function exists(array, num){
    for(let i=0; i<array.length;i++){
        if(array[i]==num){
            return "true";
        }
    }
    return "false";
}
console.log(exists(arrayx, 10));

//Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not.
function checkPalindrome(word){
    let revWord="";
    for(let i=word.length-1; i>=0;i--){
        revWord+=word[i];
    }
    if(revWord==word){
        return "true";
    }
    return "false";
}       
console.log(checkPalindrome("madam"));

//Write a function sumOfDigi(number) that prints the sum of the given number.
function sumOfDigi(num){
    let sum=0;
    while(num>0){
        sum+=num%10;
        num=Math.floor(num/10);
    }
    return sum;
}
console.log(sumOfDigi(123456));