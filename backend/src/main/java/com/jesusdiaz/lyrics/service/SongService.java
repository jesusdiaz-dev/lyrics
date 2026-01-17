package com.jesusdiaz.lyrics.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jesusdiaz.lyrics.dto.SongDto;
import com.jesusdiaz.lyrics.entity.Song;
import com.jesusdiaz.lyrics.mapper.Mapper;
import com.jesusdiaz.lyrics.repository.SongRepository;

@Service
public class SongService {

    private final SongRepository songRepo;

    public SongService(SongRepository songRepository) {
        this.songRepo = songRepository;
    }

    public List<SongDto> getAllSongs() {
        return this.songRepo.findAll().stream()
                .map(Mapper::toDto)
                .toList();
    }

    public SongDto createSong(SongDto song) {
        if(song==null){
            throw new IllegalArgumentException("New song cannot have an ID");
        }

        var songEntity = Song.builder()
                .spanishVersion(song.getSpanishVersion())
                .englishVersion(song.getEnglishVersion())
                .author(song.getAuthor())
                .build();

        return Mapper.toDto(this.songRepo.save(songEntity));
    }

    public SongDto getSongById(Long id) {
        Song song = this.songRepo.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        return Mapper.toDto(song);
    }

}
