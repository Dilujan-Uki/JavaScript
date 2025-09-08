//Random Numbers
let random = [];
function RandomNumbers(){
    let length=15
    for(let i=0; i<length; i++){
     num1=Math.floor(Math.random()*15);
     random.push(num1);
    }
    console.log(random);
}
RandomNumbers();
//Same repeating numbers
let read=[];
function RepeatNumber(){
   
}
//Another Method
let array1 = []
function generateArrayNumbers(){
   let length=Math.floor(Math.random()*10+2);
   let arr=[]
   for(let i=0; i<length; i++){
    arr[i]=Math.floor(Math.random()*10+11);
   }
   return arr
}
array1=RandomNumbers();
function checkUniNumber(){
    let uniquqNumberArray = arr[0];
    for(let i=0; i<array1.length; i++){
        for(j=0; j<uniquqNumberArray; j++){
            if(uniquqNumberArray[j] != arr[i])
                uniquqNumberArray.push(arr[i]);
        }
    }
    console.log(uniquqNumberArray);
     
}
array1=RandomNumbers;
checkUniNumber(RandomNumbers());