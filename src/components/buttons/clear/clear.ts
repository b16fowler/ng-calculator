import { Component, output } from '@angular/core';

@Component({
  selector: 'app-clear',
  imports: [],
  template: ` <button (click)="handleClick()">C</button> `,
  styles: `
    button {
      display: block;
      margin: 0 auto;
      padding: 15px;
      font-size: 36px;
      width: 65px;
      height: 90px;
    }
  `,
})
export class Clear {
  clicked = output<void>();

  handleClick() {
    this.clicked.emit();
  }
}
