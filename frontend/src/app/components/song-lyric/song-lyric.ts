import { Component, inject, input, signal } from '@angular/core';
import { SongService } from '../../core/services/song.service';
import { Song } from '../../core/constants/songs';

@Component({
  selector: 'app-song-lyric',
  imports: [],
  templateUrl: './song-lyric.html',
  styleUrl: './song-lyric.css',
})
export class SongLyric {

  title = input.required<string>();
  lyric = input.required<string>();

  

}
