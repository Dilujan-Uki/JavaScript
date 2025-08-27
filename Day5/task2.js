//Upper Left Triangle
// *
// * *
// * * *
// * * * * 
// * * * * * 
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
console.log("Number3")
let a=5;
for(let b=5; b<=a; --b){
    let space1="" , space2="* "
    console.log(space1.repeat((a-b))+space2.repeat(b));
}
//Bottom Left Triangle Method 2
// * * * * *
// * * * *
// * * * 
// * * 
// *
