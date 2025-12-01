let sen="The word is apple";

function find(sen){
    let str=sen.split(" ").join("").toLowerCase();

    let counted = new Set();

    for(let i=0; i<str.length; i++){
        if(counted.has(str[i])){
            continue;
        }
        counted.add(str[i]);

        let count=0;
        for(let j=0; j<str.length; j++){
            if(str[i]==str[j]){
                count++
            }
        }
        console.log(str[i]+" = "+count)
    }
}
find(sen)

// function CountLetter(word){
//     let sen=word.split(" ").join("").toLowerCase();
//     let sen2=[...new Set(sen)];
//     console.log(sen2);
//     for(let i=0;i<sen2.length;i++){
//         let count=0;
//         for(let j=0;j<sen.length;j++){
//            if(sen2[i]==sen.charAt(j));
//             count++
            
//         }
//        console.log(sen2[i]+" is "+count)
//     }  
    
// }
// CountLetter(sen);



//ChatGpt Method

// let sen = "The word is apple";
// function CountLetter(word){
//     let sen = word.split(" ").join("").toLowerCase();
//     let uniqueLetters = new Set(sen);

//     uniqueLetters.forEach(letter => {
//         let count = 0;
//         for(let i = 0; i < sen.length; i++){
//             if(sen[i] === letter){
//                 count++;
//             }
//         }
//         console.log(letter + " is " + count);
//     });
// }

// CountLetter(sen);
