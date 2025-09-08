//Palindrome 
let str="amma"
function isPalindrome(str){
    let isPalin = true;
    for(let i=0; i<(str.length/2); i++){
        if(str.charAt(i)!=str.charAt(str.length-1-i))
        isPalin=false;
    }
    return isPalin;
}

if(isPalindrome(str))
    console.log("Yes, "+str+" is a Palindrome word");
else
    console.log("No, "+str+" isn't a Palindorme word");