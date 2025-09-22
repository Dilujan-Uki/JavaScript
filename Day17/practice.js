let word="Dilujan";
let vow=[];
function countVowel(word){
    let letter=0;
      for(let i=0; i<word.length;i++){
        letter=word.charAt(i);
          if(letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u"||letter=="A"||letter=="E"||letter=="I"||letter=="O"||letter=="U"){
             vow.push(letter);  
          }
      }  
      return "The vowel letter count in word "+word+" is "+ vow.length;
}
console.log(countVowel(word));
//////////////////////////////////////////////////////////////////////////////////////////
let num=5;
let series=[];
function pushNumbers(num){
    for(let i=1; i<=num; i++){
     series.push(i);
   }
   return "The number series are "+series;

}
console.log(pushNumbers(num));
/////////////////////////////////////////////////////////////////////////////////////////
let a=0;
let b=1;
let next=0;
let pattern=[];
 function fibonacciNum(num){
       if(num==0){
        return "Print Nothing";
       }
       else if(num==1){
        return a;
       }
       else{
        for(let i=2; i<num; i++){
            next=a+b;
            pattern.push(next);
            a=b;
            b=next;
          }
          return ""+pattern
       }
       
 }
 console.log(fibonacciNum(10));

