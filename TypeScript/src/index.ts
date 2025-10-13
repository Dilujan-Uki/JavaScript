import { Circle } from "./Day1/circle";
import { Student } from "./Day1/student";

console.log("Hello TypeScript!");

function main(){
    const student1 = new Student("Dilujan",20,"Batticalo");
     console.log(student1.getStudentName());
    const student2 = new Student("Mukilan",20,"Batticalo");
     console.log(student2.getStudentName());
    console.log("\n");
    const radius1 = new Circle(7);
    const radius2 = new Circle(8);
    const radius3 = new Circle(9);
    console.log("The Area of Circle1 is "+Math.floor(radius1.getArea()));
    console.log("The Area of Circle2 is "+Math.floor(radius2.getArea()));
    console.log("The Area of Circle3 is "+Math.floor(radius3.getArea()));

    console.log("\n")
    console.log("The Perimiter of Circle1 is "+Math.floor(radius1.getPerimiter()));
    console.log("The Perimiter of Circle2 is "+Math.floor(radius2.getPerimiter()));
    console.log("The Perimiter of Circle3 is "+Math.floor(radius3.getPerimiter()));
}
main();