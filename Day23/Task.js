//The population 
//       ICT, BIO, Maths
//level 1-  29, 60, 22
//level 2-  31, 54, 25
//level 3-  20, 57, 16
//level 4-  3, 18, 9

function main(){
    let numbers=[[29,60,22],[31,54,25],[20,57,16],[3,18,9]];
    let level=["Level1","Level2","Level3","Level4"];
    let Course=["ICT","BIO","Maths"]
    totalNumberOfstudents(numbers,Course);
    totalNumberOfstudentsBYBatch(numbers,level)
}
main();
function totalNumberOfstudents(numbers,Course){
    for(let i=0;i<numbers[0].length;i++){
        let total=0;
        for(let j=0;j<numbers.length;j++){
            total+=numbers[j][i]
        }
        console.log("The total of the "+Course[i]+" is "+total);
    }
  
}

function totalNumberOfstudentsBYBatch(numbers,level){
    for(let i=0;i<numbers.length;i++){
        let total1=0;
        for(let j=0;j<numbers[0].length;j++){
            total1+=numbers[i][j]
        }
        console.log("The total of the "+level[i]+" is "+total1);
    }
}

