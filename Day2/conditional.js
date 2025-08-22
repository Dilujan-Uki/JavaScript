//If example

var marks = 40;
if (marks > 50) {
    console.log("Pass");
} 
else {
    console.log("Fail");
}   

function CheckMarks(marks){
    if (marks >= 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}
CheckMarks(60)

//For Traffic Light colour

let colour = "red";
function TrafficLightColour (colour){
    if (colour == "red"){
        return "stop";
    }
    else if  ( colour == "yellow"){
        return "ready";

    }
    else if ( colour == "green"){
        return "go";
    }
}

console.log(TrafficLightColour(colour));


