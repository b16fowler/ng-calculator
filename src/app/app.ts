import { Component, signal } from '@angular/core';
import { Header } from '../components/header/header';
import { Number } from '../components/buttons/number/number';
import { Screen } from "../components/screen/screen";

@Component({
  selector: 'app-root',
  imports: [Header, Number, Screen],
  template: `
    <app-header />
    <app-screen [onScreen]="onScreen()" />
    <div class="keypad">
      <app-number [num]=1 (clicked)="onScreen.set(1)" />
      <app-number [num]=2 (clicked)="onScreen.set(2)" />
      <app-number [num]=3 (clicked)="onScreen.set(3)" />
    </div>
    <div class="keypad">
      <app-number [num]=4 (clicked)="onScreen.set(4)" />
      <app-number [num]=5 (clicked)="onScreen.set(5)" />
      <app-number [num]=6 (clicked)="onScreen.set(6)" />
    </div>
    <div class="keypad">
      <app-number [num]=7 (clicked)="onScreen.set(7)" />
      <app-number [num]=8 (clicked)="onScreen.set(8)" />
      <app-number [num]=9 (clicked)="onScreen.set(9)" />
    </div>
    <app-number [num]=0 (clicked)="onScreen.set(0)" />
  `,
  styles: [`
    app-header, app-screen {
      color: white;
      text-align: center;
    }
    .keypad {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  `],
})
export class App {
  onScreen = signal(0);
}
