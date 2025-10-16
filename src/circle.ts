import { Geometric } from "./geomatric";
export class Circle extends Geometric{
     private radius:number;

     constructor(radius:number=3,color:string,filled:boolean){
          super (color,filled);
          this.radius=radius;
         
     }
      
     public getRadius():number{
          return this.radius;
     }

     public setRadius(radius:number):void{
          this,radius=radius;
     }

     public getArea():number{
          return Math.PI*Math.pow(this.radius,2)
     }
     
     public getPerimeter():number{
          return 2*Math.PI*this.radius;
     }

     public getDiameter():number{
          return 2*this.radius
     }
     
     public printCircle():void{
          console.log("Circle radius is :"+this.radius)
     }
   
}
