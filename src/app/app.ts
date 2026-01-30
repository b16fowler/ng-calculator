import { Component, HostListener, signal } from '@angular/core';
import { Header } from '../components/header/header';
import { Number } from '../components/buttons/number/number';
import { Screen } from '../components/screen/screen';
import { Clear } from '../components/buttons/clear/clear';
import { Operation } from "../components/buttons/operation/operation";

@Component({
  selector: 'app-root',
  imports: [Header, Number, Screen, Clear, Operation],
  template: `
    <app-header />
    <app-screen [onScreen]="onScreen()" />
    <div class="keypad-row">
      <app-number key="7" (clicked)="keyInput('7')" />
      <app-number key="8" (clicked)="keyInput('8')" />
      <app-number key="9" (clicked)="keyInput('9')" />
      <app-operation key='+' (clicked)="keyInput('+')"/>
    </div>
    <div class="keypad-row">
      <app-number key="4" (clicked)="keyInput('4')" />
      <app-number key="5" (clicked)="keyInput('5')" />
      <app-number key="6" (clicked)="keyInput('6')" />
      <app-operation key='-' (clicked)="keyInput('-')" />
    </div>
    <div class="keypad-row">
      <app-number key="1" (clicked)="keyInput('1')" />
      <app-number key="2" (clicked)="keyInput('2')" />
      <app-number key="3" (clicked)="keyInput('3')" />
      <app-operation key='*' (clicked)="keyInput('*')" />
    </div>
    <div class="keypad-row">
      <app-number key=" " />
      <app-number key="0" (clicked)="keyInput('0')" />
      <app-operation key="=" (clicked)="keyInput('=')"/>
      <app-operation key="/" (clicked)="keyInput('/')"/>
    </div>
    <app-clear (clicked)="clear()"></app-clear>
  `,
  styles: [
    `
      app-header,
      app-screen {
        color: white;
        text-align: center;
      }
      .keypad-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    `,
  ],
})
export class App {
  onScreen = signal("0");

  // Global listener for any keydowns
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // If pressed key is a number, call keyInput for digit
    const match = event.key.match(/\d/);
    if (match) {
      this.keyInput(match[0]);
    }
  }

  // Updates value of onScreen based on number key
  keyInput(key: string) {
    if (key === '=') this.handleSolve();
    else if (!key.match(/\d/)) {
      this.handleOperation(key)
    }
    else {
      this.handleKey(key);
    }
  }

  handleSolve() {
    //TODO: USE LATER AS TO NOT USE EVAL()
    // const split = this.onScreen().split(/\D/);
    // const operation = this.onScreen().match(/\D/)?.[0];
    
    // const num1 = +split[0];
    // const num2 = +split[1];
    // console.log("onScreen(): ", this.onScreen());
    // console.log("num1: ", num1);
    // console.log("num2: ", num2);
    // console.log("operation: ", operation);
    
    // Easy solution (for now)
    this.onScreen.set(eval(this.onScreen()));
  }
  
  handleOperation(key: string) {
    this.onScreen.set(eval(this.onScreen()) + key);
  }

  handleKey(key: string) {
    if (this.onScreen() === "0") this.onScreen.set(key);
    else {
      this.onScreen.update(val => val + key);
    }
  }

  // Reset onScreen to 0
  clear() {
    this.onScreen.set("0");
  }
}
