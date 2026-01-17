import { Injectable } from '@angular/core';
import { Song } from '../constants/songs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { 

  }

  getSongById(id: string) {
    console.log(id);
    return this.http.get<Song>(`http://localhost:8080/api/songs/1`).pipe(
      tap(response => console.log('Data received:', response))
    );
  }
}
