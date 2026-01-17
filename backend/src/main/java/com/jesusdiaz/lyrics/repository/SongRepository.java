package com.jesusdiaz.lyrics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jesusdiaz.lyrics.entity.Song;


@Repository
public interface SongRepository extends JpaRepository<Song, Long> {
    
}
