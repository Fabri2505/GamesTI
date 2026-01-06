package com.games.games_ti.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.games.games_ti.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
