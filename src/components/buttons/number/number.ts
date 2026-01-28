import { Component, output, input } from '@angular/core';

@Component({
  selector: 'app-number',
  imports: [],
  template: `
    <button (click)="handleClick()">{{num()}}</button>
  `,
  styles: `
    button {
      display: block;
      margin: 0 auto;
      padding: 15px;
      font-size: 36pt;
    }
  `,
})
export class Number {
  clicked = output<void>();
  num = input<number>();

  handleClick() {
    this.clicked.emit();
  }
}
