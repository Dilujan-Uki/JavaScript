// Given a string that may include some bold text in Markdown, return the equivalent HTML
// string.

//  Bold text in Markdown is any text that starts and ends with two asterisks (**) or two
// underscores (__).

//  There cannot be any spaces between the text and the asterisks or underscores, but there can
// be spaces in the text itself.

//  Convert all bold occurrences to HTML b tags and return the string.

let HTML="**This is bold**";

function Convert(HTML){
    let tag=HTML.toLowerCase().split("");
    let last = tag.length-2;
    let last1 = tag.length-1;

     if(tag[0]=="*" || tag[0]=="_" || tag[1]=="*" || tag[1]=="_" || tag[last]=="*" || tag[last]=="_" | tag[last1]=="*" || tag[last1]=="_"){
        tag[1]="<b>";
        tag[last]="</b>"
        tag[0]=" ";
        tag[last1]=" ";
    }
   

    console.log(tag.join("").trim());

}
Convert(HTML)


   