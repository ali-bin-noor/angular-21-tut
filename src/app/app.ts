import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { ProfileComponent } from './profile/profile';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  imports: [RouterOutlet, Login, SignUp, ProfileComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name: string = "Anil Sidhu"
  data: string | number = "Hello"
  other: any = true
  email = "maheboob.kankurti@gmail.com"
  updatename() {
    //this.name = 9;
    this.data = 0

    this.other = "anil"



    this.other = 30


    this.other = {}
  }

  updateVar() {
    let x: number = 30
    let y: number = 30

    this.sum(x, y);
  }

  sum(a: number, b: number) {

    console.log(a + b)

  }

  getName() {
    return this.name;
  }
  getValues(a: number, b: number) {
    return a * b;
  }

  handleClickEvent() {
    console.log("handleClickEvent function called.");
    this.otherFunction();
  }

  otherFunction() {
    console.log("otherFunction Function called.");
  }


  count = 0;

  handleCounter(value: string) {
    if (value == "minus") {
      if (this.count > 0) {
        this.count--;
      }
    } else if (value == "plus") {
      this.count++;
    } else {
      this.count = 0;
    }
  }

  handleEvent(event: Event) {//MouseEvent ki jagah any laga sakte ho
    console.log("function called", event.type)
    //console.log("function called",event.target.name)
    //console.log("function called",(event.target as Element).className)
    console.log("value", (event.target as HTMLInputElement).value)
  }




  naam = ""
  displaynaam = ""
  getNaam(event: Event) {
    const value = (event.target as HTMLInputElement).value
    console.log(value)
    this.naam = value
  }

  showNaam() {
    this.displaynaam = this.naam
  }

  setNaam() {
    this.naam = "Sam"
  }


  email2 = ""
  getEmail(value: string) {
    console.log(value)
    this.email2 = value
  }
  setEmail() {
    this.email2 = "test@test.com"
  }

  //learning if-else | control flow
  display = true;
  x = 10
  toggle2Div = false

  hideDiv() {
    this.display = false
  }

  showDiv() {
    this.display = true
  }
  toggleDiv() {
    this.display = !this.display
  }

  toggleTwoDiv() {
    this.toggle2Div = !this.toggle2Div
  }

  // learning else if
  color = 100

  handleColor(val: number) {
    this.color = val
  }

  handleInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value)
  }

  // learning switch case
  colour = 'blue'

  handleColour(val: string) {
    this.colour = val
  }

  handleInputForColor(event: Event) {
    this.colour = (event.target as HTMLInputElement).value
  }

  // learning for loop
  users = ["Anil", "Sam", "Peter", "Raju", "Himansu"]

  students = [
    { name: 'Anil', age: 29, email: 'anil@test.com' },
    { name: 'Sam', age: 29, email: 'sam@test.com' },
    { name: 'Peter', age: 29, email: 'peter@test.com' },
    { name: 'Himansu', age: 29, email: 'himansu@test.com' },
  ]

  getname(name: string) {
    console.log(name)
  }

  //leaning Signals
  countForSignal = signal(10) //this is signal
  xForSignal = 20 //this is normal variable

  constructor() {
    effect(() => {
      console.log(this.countForSignal())
    })
  }

  updatevalue() {
    this.countForSignal.set(this.countForSignal() + 1)

  }

}
