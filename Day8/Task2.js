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
