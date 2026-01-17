import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `<h1 class="text-red-500">home works!</h1>`,
  styleUrl: './home.css',
})
export class Home { 
  constructor() {
    console.log("funciona");
  }
}
