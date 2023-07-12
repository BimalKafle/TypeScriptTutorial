import {HasFormatter} from '../Interface/HasFormatter.js'

export class Invoice implements HasFormatter{
    client:string;
    amount:number;
    detail:string;

    constructor(a:string,b:string,c:number){
        this.client=a;
        this.detail=b;
        this.amount=c;
    }
    format(){
        return `${this.client}owes $${this.amount}for${this.detail}`;
    }

}