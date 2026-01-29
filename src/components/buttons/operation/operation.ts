import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-operation',
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
    }`,
})
export class Operation {
    clicked = output<void>();
    key = input<string>();

    handleClick() {
      this.clicked.emit();
    }
}
