import { Component, output } from '@angular/core';

@Component({
  selector: 'app-clear',
  imports: [],
  template: `
    <button (click)="handleClick()">Clear</button>
  `,
  styles: `
    button {
      display: block;
      margin: 0 auto;
      margin-top: 3%;
      font-size: 36px;
    }
  `,
})
export class Clear {
  clicked = output<void>();

  handleClick() {
    this.clicked.emit();
  }
}
