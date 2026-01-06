package com.games.games_ti.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.games.games_ti.entity.Serie;
@Repository
public interface SerieRepository extends JpaRepository<Serie, Long> {

}
