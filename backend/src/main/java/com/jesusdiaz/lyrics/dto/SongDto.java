package com.jesusdiaz.lyrics.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SongDto {

    // private Long id;
    
    private String spanishVersion;
    
    private String englishVersion;

    private LocalDate createdAt;

    private LocalDate updatedAt;
    
    private String author;

}