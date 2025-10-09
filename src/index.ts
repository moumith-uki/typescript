import { Student} from "./day01/student";

function main() {

    const student1 = new Student("Dexter samuel",14,"Eravur");
    console.log (student1.getStudentName())

    const student2 = new Student ("Raajavel.ms",17,"Mamsapuram")
    console.log (student2.getStudentDistrict())
    console.log (student1.getStudentDistrict() +" is "+ student1.getStudentName()+"'s native" )
    console.log(student2.getStudentName()+" is from "+student2.getStudentDistrict())
    console.log(student1.getStudentAge())

    student1.setStudentName("Mallesh kannan")
    console.log (student1.getStudentDistrict() +" is "+ student1.getStudentName()+"'s native" )


    
}
main()

import { Circle } from "./day01/circle";
function main2(){
    const circle1=new Circle (35)
    console.log (circle1.getArea())
    console.log (circle1.getPerimeter())

    const circle2 = new Circle(14)
    console.log (circle2.getPerimeter())
}
main2()
