package com.games.games_ti.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.games.games_ti.entity.Baraja;
@Repository
public interface BarajaRepository extends JpaRepository<Baraja, Long> {

}
