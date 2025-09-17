function main(){
   let A=[[1,2,3],[4,5,6], [7,8,9]];
   let B=[[10,11,12],[13,14,15],[16,17,18]];
   let output=matrixMultipilication(A,B);
   printMatrix(output);
}
main();


function canDoMUltiplication(a,b){
    if(a[0].length==b.length){
         return true;
   }
    return false;
}

function matrixMultipilication(a,b){
     if(canDoMUltiplication(a,b)){
       let row=a.length;
       let col=b[0].length;
       let colRow=b.length;
       let sum=0;
       let output=Array.from({length:row},()=>new Array(col).fill(0));

       for(let i=0; i<row; i++){
            for(let j=0; j<col; j++){
                for(let k=0; k<colRow; k++){
                  sum+=(a[i][k]*b[k][j]);
                }
                output[i][j]=sum;
            }
        }
        return output;
     }
     else{
        console.log("Cannot do the multiplication, because the column value of the first matrix and the row value of the second matrix are difference");
     }
}
 
function printMatrix(a){
    for(let i=0; i<a.length; i++){
        console.log(a[i]);
    }
}
