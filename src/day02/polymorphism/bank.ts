export class Bank{
     deposit:number=100000;

    public interest(deposit:number):number{
        return this.deposit*0.025
    }
}

