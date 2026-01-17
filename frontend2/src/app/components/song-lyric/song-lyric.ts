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

   songId = input<string>(''); 

   song : Song | undefined = undefined;

   songService = inject(SongService);

   ngOnInit() {
    this.song = this.songService.getSongById(this.songId()) || undefined;
   }

}
