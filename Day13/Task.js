//Random Num of 10x5 Array and Find the maximum of each Array
let row=10;
let col=5;
function RandomNumOfArray(row,col){
    let mat=Array.from({length:row},()=> new Array(col).fill(0));
    for(let i=0;i<row;i++){
        for(let j=0; j<col; j++){
            mat[i][j]=Math.floor(Math.random()*10);
        }
    }
    for(let i=0; i<mat.length;i++){
        console.log(mat[i]);
    }
    return "";

}
console.log(RandomNumOfArray(row,col));









 
