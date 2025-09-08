//Random Numbers
let random = [];
function RandomNumbers(){
    let length=10
    for(let i=0; i<length; i++){
     num1=Math.floor(Math.random()*10);
     random.push(num1);
    }
    console.log(random);
}
RandomNumbers();
//Sum of the RandomNumbers
function SumOfRandomNumbers(){
    sum=0
    for(let i=0; i<random.length; i++){
       sum+=random[i];
    }
    console.log("The sum of the array is "+sum);
}
SumOfRandomNumbers()

