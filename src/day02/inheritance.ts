export class GeometricObject{
    color : String;
    filled : boolean;
    dateCreated: Date

    constructor(color:String,filled:boolean,dateCreated:Date){
        this.color = color;
        this.filled = filled;
        this.dateCreated =dateCreated;
    }
}