//2 Dimensonal Array
console.log("2D Array");
let num=[
    [10,20,30],
    [40,50,60],
    [70,80,90],
];
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}
console.log(" ");
//For to come in Single Column
console.log("For to come in Cloumn")
for(let i=0; i<num.length; i++){
    for(let j=0; j<num[0].length;j++){
        console.log(num[i][j]);
    }
}
console.log(" ");
//For to come in Rows without brackets
console.log("For to come in row without bracket")
for(let i=0; i<num.length; i++){
    let string=""
    for(let j=0; j<num[0].length;j++){
        string+=num[i][j]+", "
    }
    console.log(string);
}
console.log(" ");
//Creating a single line 2D Array
console.log("Creating 2D Array using single line Code")
const rows = 3;
const cols = 4;
const mat = Array.from({length: rows},() => new Array(cols).fill(Math.floor(Math.random()*10)));
for(let k=0; k<num.length; k++){
    console.log(mat[k]);
}