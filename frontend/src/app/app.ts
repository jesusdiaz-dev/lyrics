import { Component, ElementRef, inject, input, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwipeDirective } from './core/directives/swipe.directive';
import { Song } from './core/constants/songs';
import { SongService } from './core/services/song.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SwipeDirective],
  template: '<router-outlet></router-outlet>',
})
export class App {
  

}
