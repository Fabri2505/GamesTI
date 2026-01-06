package com.games.games_ti.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.games.games_ti.entity.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
