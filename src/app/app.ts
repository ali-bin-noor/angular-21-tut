import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { ProfileComponent } from './profile/profile';

@Component({
  imports: [RouterOutlet,Login,SignUp,ProfileComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name:string="Anil Sidhu"
  data:string|number= "Hello"
  other:any = true
  email="maheboob.kankurti@gmail.com"
  updatename(){
    //this.name = 9;
    this.data=0

    this.other="anil"



    this.other = 30


    this.other = {}
  }

  updateVar(){
    let x:number = 30
    let y:number = 30

    this.sum(x,y);
  }

  sum(a:number,b:number){

    console.log(a+b)

  }

  getName(){
    return this.name;
  }
  getValues(a:number,b:number){
    return a*b;
  }

  handleClickEvent(){
    console.log("handleClickEvent function called.");
    this.otherFunction();
  }

  otherFunction(){
    console.log("otherFunction Function called.");
  }
}
