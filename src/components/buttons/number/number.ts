import { Component, output, input } from '@angular/core';

@Component({
  selector: 'app-number',
  imports: [],
  template: `
    <button (click)="handleClick()">{{key()}}</button>
  `,
  styles: `
    button {
      display: block;
      margin: 0 auto;
      padding: 15px;
      font-size: 36pt;
      width: 65px;
      height: 90px;
    }
  `,
})
export class Number {
  clicked = output<void>();
  key = input<string>();

  handleClick() {
    this.clicked.emit();
  }
}
