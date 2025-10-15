import { Student} from "./day01/student";

//function main() {

    //const student1 = new Student("Dexter samuel",14,"Eravur");
    //console.log (student1.getStudentName())

    //const student2 = new Student ("Raajavel.ms",17,"Mamsapuram")
    //console.log (student2.getStudentDistrict())
    //console.log (student1.getStudentDistrict() +" is "+ student1.getStudentName()+"'s native" )
    //console.log(student2.getStudentName()+" is from "+student2.getStudentDistrict())
    //console.log(student1.getStudentAge())

   // student1.setStudentName("Mallesh kannan")
    //console.log (student1.getStudentDistrict() +" is "+ student1.getStudentName()+"'s native" )


    
//}
//main()

//import { Circle } from "./day01/circle";
//function main2(){
    //const circle1=new Circle (35)
    //console.log (circle1.getArea())
   // console.log (circle1.getPerimeter())

   // const circle2 = new Circle(14)
   // console.log (circle2.getPerimeter())
//}
//main2()
import { Human } from "./day02/polymorphism/Human";
import { Boy } from "./day02/polymorphism/Boy";
import { Bank } from "./day02/polymorphism/bank";
import { BOC } from "./day02/polymorphism/BOC";
import { Peoples } from "./day02/polymorphism/People's";
import { HNB } from "./day02/polymorphism/HNB";

function main(){
       const obj=new Boy();
    obj.eat();

}
main()

function main2(){
    const bankObj = new Bank();
    const bocObj = new BOC();
    const hnbObj = new HNB();
    const peoplesObj = new Peoples();

    console.log ("How much I'll get If I deposit "+bankObj.deposit+" in each bank.")
    console.log("I will get "+bankObj.interest()+" in general")
    console.log("I will get "+bocObj.interest()+" in BOC")
    console.log("I will get "+hnbObj.interest()+" in HNB")
    console.log("I will get "+peoplesObj.interest()+" in People's bank")

}
main2()

