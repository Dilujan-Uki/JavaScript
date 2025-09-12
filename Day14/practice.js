let row=3;
let col=3;
let matrix=GenrateMatrix(row,col);
function GenrateMatrix(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0));
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
           if(i==j){
            mat[i][j]=1;
           }
        }
    }
      return mat;

}
function PrintMatrix(mat){
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
}
PrintMatrix(matrix);

