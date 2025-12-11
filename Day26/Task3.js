//Given a string sentence, return a compressed version of the sentence where consecutive
//duplicate words are replaced by the word followed with the number of times it repeats in
//parentheses.

//Only consecutive duplicates are compressed.

//Words are separated by single spaces.

let sen="yes yes yes please ";
 
function compressed(sen){
     let str=sen.toLowerCase().split(" ");
     let word=str[0];
     let count=0;
     
       for(let i=0; i<str.length; i++){
        if(word==str[i]){
            count++;
        }
            
       }
       console.log(word+"("+count+")"+str[3])

}
compressed(sen);