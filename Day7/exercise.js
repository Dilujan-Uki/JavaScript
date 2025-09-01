//1st question
let numbers = [];

//2nd question
function addAnElemental(numbers,index,value){
    if(index<0 || index>=numbers.lengh){
        console.log("Invalid index number");
    }
    else{
        numbers.splice(index,0,value);
        console.log("New array is "+numbers);
    }
}
addAnElemental(numbers,0,8);
   
function PrintAllElements(){
    console.log(numbers);
}
PrintAllElements(numbers);

function PrintRangeNumbers(numbers,start,end){
    if(start<0 || end>=numbers.length){
        console.log("Invalid start and end");
    }
    else{ 
        for(let i=start; i<=end;i++ )
            console.log(numbers[i]);
    }
}
PrintRangeNumbers(0,0,0)

//Find the maximum value
var num = [1,2,3,4,5,6,7];
function findTheMax(num){
    let max=num[0];
    for(let i=1; i<num.length; i++){
        if(max<num[i]){
            max=num[i];
        }
    }
console.log("The maximum value in this array is : "+max)
}
findTheMax(num);

//Find the total value

function Totalvalue(num){
    let sum = 0
    for(let i=0; i<num.length; i++){
        sum += num[i];
    }
   console.log("Total "+ sum);
}
Totalvalue(num);

