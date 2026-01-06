package com.games.games_ti.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.games.games_ti.DTO.UserCreateDTO;
import com.games.games_ti.DTO.UserResponseDTO;
import com.games.games_ti.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @GetMapping("")
    public List<UserResponseDTO> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("")
    public UserResponseDTO createUser(@Valid @RequestBody UserCreateDTO user) {
        UserResponseDTO userRest = userService.createUser(user);

        return ResponseEntity.ok(userRest).getBody();

    }
    
}
