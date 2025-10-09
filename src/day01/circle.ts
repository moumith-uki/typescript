export class Circle{
    private Cradius : number;

    constructor(radius:number){
        this.Cradius =radius;
    }
    
    public getArea(){
        return Math.PI*Math.pow(this.Cradius,2)
    }
    public getPerimeter(){
        return 2*Math.PI*this.Cradius
    }
    public setRadius(radius:number){
        this.Cradius = radius
    }
}