import { Component, input } from '@angular/core';

@Component({
  selector: 'app-screen',
  imports: [],
  template: `
    <div>
      <h1>
        {{ onScreen() }}
      </h1>  
    </div>
  `,
  styles: `
    div {
      border-style: solid;
      margin: auto;
      margin-top: 3%;
      margin-bottom: 3%;
      font-size: 38px;
      width: 40%;
      align-self: center;
    }
  `,
})
export class Screen {
  onScreen = input<string>();
}
