package com.jesusdiaz.lyrics.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jesusdiaz.lyrics.dto.SongDto;
import com.jesusdiaz.lyrics.entity.Song;
import com.jesusdiaz.lyrics.service.SongService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/songs")
public class SongController {


    private final SongService songService;

    public SongController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping
    public ResponseEntity<List<SongDto>> getAll() {
        List<SongDto> songs = songService.getAllSongs();
        return ResponseEntity.ok(songs);
    }

    @PostMapping
    public ResponseEntity<SongDto> createSong(@RequestBody SongDto song) {
        SongDto createdSong = songService.createSong(song);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSong);
    }
    
    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> deleteSong(@RequestParam Long id) {
    //     songService.deleteSong(id);
    //     return ResponseEntity.noContent().build();
    // }
    
}
