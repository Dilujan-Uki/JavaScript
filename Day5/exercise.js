//Top Left Triangle
// *
// * *
// * * *
// * * * *
// * * * * *
console.log("Top Left Triangle")
let i = 5;
for(let j=1; j<=i; j++ ){
    let pattern =" ";
    for( let k=1; k<=j; k++){
        pattern+= "* ";         //Pattern+= Means Pattern=Pattern+"* "
    }
    console.log(pattern);
}
//Top Rigth Triangle
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
console.log("Top Right Triangle")
let rows=5;
for(let i=1; i<rows; i++){
    let space="  " , star=" *";
    console.log(space.repeat((rows-i))+star.repeat(i));
}
//Bottom Left Triangle
// * * * * *
// * * * *
// * * *
// * *
// *
console.log("Bottom Left Triangle ");
let row=5;
for(let j=row; j>=1; j--){
    let pattern="";
    for( let k=1; k<=j; k++){
        pattern+="* ";
    }
    console.log(pattern);
}
//Bottom Right Triangle
// * * * * *
//   * * * *
//     * * *
//       * *
//         *
console.log("Bottom Right Triangle ");
let left=5;
for(let j=left; j>=1; j--){
    let pattern1=" ";
    let  pattern="* ";

    console.log(pattern1.repeat((left-j))+pattern.repeat(j));
}
//Bottom Triangle
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
console.log("Bottom  Triangle ");
let left1=5;
for(let j=left1; j>=1; j--){
    let pattern1=" ";
    let  pattern="* ";

    console.log(pattern1.repeat((left-j))+pattern.repeat(j));
}