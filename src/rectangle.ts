import { Geometric } from "./geomatric";

export class Rectangle extends Geometric{
    private width:number;
    private height:number;

    constructor(width:number,height:number,color:string,filled:boolean){
         super();
         this.width=width;
         this.height=height;
    }

    public getWidth():number{
        return this.width;
    }

    public setWidth(width:number):void{
        this.width=width;
    }

    public getHeight():number{
        return this.height;
    }

    public setHeight(height:number):void{
        this.height=height;
    }

    public getArea():number{
        return this.height*this.width
    }
    
    public getPerimeter():number{
        return (this.height+this.width)*2
    }
}
