import { Component, signal } from '@angular/core';
import { Header } from '../components/header/header';
import { Number } from '../components/buttons/number/number';
import { Screen } from "../components/screen/screen";
import { Clear } from "../components/buttons/clear/clear";

@Component({
  selector: 'app-root',
  imports: [Header, Number, Screen, Clear],
  template: `
    <app-header />
    <app-screen [onScreen]="onScreen()" />
    <div class="keypad">
      <app-number num='1' (clicked)="numInput('1')" />
      <app-number num='2' (clicked)="numInput('2')" />
      <app-number num='3' (clicked)="numInput('3')" />
    </div>
    <div class="keypad">
      <app-number num=4 (clicked)="numInput('4')" />
      <app-number num=5 (clicked)="numInput('5')" />
      <app-number num=6 (clicked)="numInput('6')" />
    </div>
    <div class="keypad">
      <app-number num=7 (clicked)="numInput('7')" />
      <app-number num=8 (clicked)="numInput('8')" />
      <app-number num=9 (clicked)="numInput('9')" />
    </div>
    <app-number num=0 (clicked)="numInput('0')" />
    <app-clear (clicked)="clear()"></app-clear>
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
  onScreen = signal('0');

  numInput(key: string) {
    if (this.onScreen() === '0') this.onScreen.set(key);
    else {
      this.onScreen.update((val: string): string => val + key)
    }
  }

  clear() {
    this.onScreen.set('0');
  }
}
