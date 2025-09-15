let row=3;
let col=3;
let matrix=RandomArray(row,col)
function RandomArray(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0))
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            mat[i][j]=Math.floor(Math.random()*10);
        }
    }
    return mat;
}
function InOrder(mat){
    for(let i=0; i<mat.length;i++)
        console.log(mat[i]);
}
InOrder(matrix);

function EachArrayTotal(mat){
    for(let i=0; i<mat.length; i++){
        let maxValue=0
        for(let j=0;j<mat[0].length; j++){
            maxValue+=mat[i][j]
        }
        console.log("The total value of in "+(i+1)+"row "+maxValue)
    }
}
EachArrayTotal(matrix)
function TotalOfTheMatrix(mat){
    let sum=0;
    for(let i=0; i<mat.length; i++){
        for(let j=0;j<mat[0].length; j++)
            sum+=mat[i][j];
    }
    return sum;
}   
console.log(TotalOfTheMatrix(matrix));