import {HasFormatter} from '../Interface/HasFormatter.js'

export class Payment implements HasFormatter{
    receipent:string;
    amount:number;
    detail:string;

    constructor(a:string,b:string,c:number){
        this.receipent=a;
        this.detail=b;
        this.amount=c;
    }
    format(){
        return `${this.receipent}is owed $${this.amount}for${this.detail}`;
    }

}