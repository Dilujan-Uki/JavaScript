let row=4;
let col=5;
let matrix=Gnerate2dArray(row,col)
function Gnerate2dArray(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0));
    for(let i=0;i<row;i++){
        for(let j=0; j<col;j++){
            mat[i][j]=Math.floor(Math.random()*10);
        }
    }
   return mat;

}
function PrintArray(mat){
    for(let i=0;i<mat.length;i++){
        console.log(mat[i]);
    }
}

PrintArray(matrix);
//Typing the matrix in inverted row numbers to coloumn and coloumn numbers to row
function InverseAray(mat){
    let mat1=Array.from({length:mat[0].length},()=> new Array(mat.length).fill(0));
    for(let i=0;i<mat.length;i++){
        for (let j=0;j<mat[0].length;j++){
          mat1 [j][i]= mat [i][j];
        }
    }
    return mat1;
}

let revmat=InverseAray(matrix)
console.log("\n The inverted matrix")
PrintArray(revmat)