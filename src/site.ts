import {Invoice} from './Module/Invoice.js'
import{Payment} from './Module/Payment.js'
import { HasFormatter } from './Interface/HasFormatter.js';

const formElement=document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formElement.children);

const type=document.querySelector('#type') as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;


formElement.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let doc:HasFormatter;
    if(type.value==='invoice'){
        doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }else{
        doc=new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }
    console.log(doc);
});






