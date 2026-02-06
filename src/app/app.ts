import { Header } from '../components/header/header';
import { Screen } from '../components/screen/screen';
import { Clear } from '../components/buttons/clear/clear';
import { Number } from '../components/buttons/number/number';
import { Component, HostListener, signal } from '@angular/core';
import { Operation } from '../components/buttons/operation/operation';

@Component({
  selector: 'app-root',
  imports: [Header, Number, Screen, Operation, Clear],
  template: `
    <app-header />
    <app-screen [onScreen]="onScreen()" />
    <div class="keypad-row">
      <app-number key="7" (clicked)="handleKey('7')" />
      <app-number key="8" (clicked)="handleKey('8')" />
      <app-number key="9" (clicked)="handleKey('9')" />
      <app-operation key="+" (clicked)="handleKey('+')" />
      <app-operation key="=" (clicked)="handleKey('=')" />
    </div>
    <div class="keypad-row">
      <app-number key="4" (clicked)="handleKey('4')" />
      <app-number key="5" (clicked)="handleKey('5')" />
      <app-number key="6" (clicked)="handleKey('6')" />
      <app-operation key="-" (clicked)="handleKey('-')" />
      <app-operation key=" " />
    </div>
    <div class="keypad-row">
      <app-number key="1" (clicked)="handleKey('1')" />
      <app-number key="2" (clicked)="handleKey('2')" />
      <app-number key="3" (clicked)="handleKey('3')" />
      <app-operation key="*" (clicked)="handleKey('*')" />
      <app-operation key=" " />
    </div>
    <div class="keypad-row">
      <app-number key=" " />
      <app-number key="0" (clicked)="handleKey('0')" />
      <app-number key="." (clicked)="handleKey('.')" />
      <app-operation key="/" (clicked)="handleKey('/')" />
      <app-clear (clicked)="clear()"></app-clear>
    </div>
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
  onScreen = signal('0');

  // Global listener for any keydowns
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // Backspace key clears
    if (event.key === 'Backspace') {
      this.clear();
    }
    // Enter is =
    else if (event.key === 'Enter') {
      this.handleKey('=');
    }
    // Handle any other input
    this.handleKey(event.key);
  }

  handleKey(key: string) {
    // key is a digit
    if (key.match(/\d|[.]/)) {
      this.handleDigit(key);
    }
    // key is an operation
    else if (key.match(/[+\-=*\/]/)) {
      this.handleOperation(key);
    }
  }

  handleDigit(key: string) {
    // For first input, set screen to key entered
    if (this.onScreen() === '0') this.onScreen.set(key);
    else {
      // Concat key to onSceen
      this.onScreen.update((val) => val + key);
    }
  }

  handleOperation(key: string) {
    // Solve expression onScreen
    let solution = eval(this.onScreen());
    // Round if needed
    solution = this.checkRounding(eval(this.onScreen()));
    // Solve
    if (key === '=') this.onScreen.set(solution);
    else if (this.onScreen() === '0') {
      return;
    } else {
      // Solve, then ready for next entry
      this.onScreen.set(solution + key);
    }
  }

  checkRounding(solution: number) {
    // If solution is integer, drop decimals
    if (solution % 1 !== 0) {
      const rounded = solution.toFixed(2);
      let roundedStr = +rounded;
      return roundedStr;
    }
    return solution;
  }

  // Reset onScreen to 0
  clear() {
    this.onScreen.set('0');
  }
}
