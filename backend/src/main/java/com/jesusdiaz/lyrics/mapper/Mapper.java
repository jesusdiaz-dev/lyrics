package com.jesusdiaz.lyrics.mapper;

import com.jesusdiaz.lyrics.dto.SongDto;
import com.jesusdiaz.lyrics.entity.Song;

public class Mapper {

    // Song Entity to SongDTO
    public static SongDto toDto(Song song) {
        return SongDto.builder()
                .spanishVersion(song.getSpanishVersion())
                .englishVersion(song.getEnglishVersion())
                .createdAt(song.getCreatedAt())
                .updatedAt(song.getUpdatedAt())
                .author(song.getAuthor())
                .build();
    }

    // SongDTO to Song Entity
    // public static Song toEntity(SongDto songDto) {
    //     return Song.builder()
    //             .id(songDto.getId())
    //             .spanishVersion(songDto.getSpanishVersion())
    //             .englishVersion(songDto.getEnglishVersion())
    //             .createdAt(songDto.getCreatedAt())
    //             .updatedAt(songDto.getUpdatedAt())
    //             .author(songDto.getAuthor())
    //             .build();
    // }

}
