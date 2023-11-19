import {computedFrom  } from "aurelia-framework";
export class Sponsors {
  message: string;
    data = [
   'num','trad', 'num2', 'trad'
    ]
  mapCollection: any;
  person: any;
  constructor() {
    this.message = 'Hello world';
    setTimeout(()=> {
    this.message = 'chang message'
    }, 2000)
    this.mapCollection = new window.Map()
    this.mapCollection.set('one' , 'love')
    this.mapCollection.set('tow', 'rafa')
    this.person = new Person()
    this.person.fname = 'tradcon'
    this.person.lname = 'alicon'
  }


  doSome(foo){
  console.log(foo);
  
  }
}
class Person{
  fname :'tradlass'
  lname:'alilass'
  @computedFrom('fname', 'lname')
  get fullName(){return `${this.fname}  ${this.lname}`}
  }
