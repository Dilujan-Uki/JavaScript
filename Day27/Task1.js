// In sentence every words first letter needs to be in capital letter

let  word ="The apple is red"

function Capital(word){
    let tag=word.split(" ");
    let tag1="";
    
    for(let i=0; i<tag.length; i++){
        tag1+=tag[i][0].toUpperCase(" ")+tag[i].slice(1).toLowerCase()+" "
         
    }
   return tag1;
}
console.log(Capital(word))