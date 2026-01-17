import { Injectable } from '@angular/core';
import { songs } from '../constants/songs';
import { Song } from '../constants/songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs: Song[] = songs;

  constructor() { 

  }

  getSongById(id: string) {
    return this.songs.find(song => song.title === id);
  }
}
