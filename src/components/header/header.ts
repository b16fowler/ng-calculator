import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <h1>
      {{ title }}
    </h1>
  `,
  styles: ``,
})
export class Header {
  title = "Brett's Angular Calculator";
}
