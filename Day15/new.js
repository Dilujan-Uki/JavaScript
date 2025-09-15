const row=5;
const col=5;

function something(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0));
    for(let i=0;i<row; i++){
        for(let j=0; j<col; j++){
             if(i==j){
             mat[i][j]=1;
            }
        }
    }
    for(let i=0; i<mat.length; i++){
              console.log(mat[i]);
            }
    return "";
    
}
let some=something(row,col);
console.log(some);
function newone(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0));
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            mat[i][j]=Math.floor(Math.random()*10);
        }
    }
    return mat
}
function order(mat){
    for(let i=0;i<mat.length; i++){
        console.log(mat[i]);
    }
}

let one=newone(row,col);
order(one);
function bigOne(mat){
    for(let i=0;i<mat.length;i++){
         let big=mat[i][0];
        for(let j=0;j<mat[0].length;j++){
            if(big<mat[i][j]){
                big=mat[i][j];
            }
        }
         console.log("the big num in array "+(i+1)+" is "+big);
    }
   
}
bigOne(one);
////
let name="amma"
function checking(name){
    let the=true;
    for(let i=0; i<(name.length/2); i++){
        if(name.charAt(i)!=name.charAt(name.length-i-1))
            the=false;
        
    }
    return the;
}
console.log("The word "+name+" is a palindrome : "+checking(name));
