package com.games.games_ti.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.games.games_ti.DTO.UserResponseDTO;
import com.games.games_ti.entity.User;
import com.games.games_ti.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<UserResponseDTO> getUsers() {
        return userRepository.findAll().stream()
            .map((user)-> UserResponseDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .name(user.getNom())
                .ape(user.getApe())
                .email(user.getEmail())
                .build())
            .toList();
    }

    public UserResponseDTO createUser(com.games.games_ti.DTO.UserCreateDTO userCreateDTO) {
        var user = User.builder()
            .username(userCreateDTO.getUsername())
            .nom(userCreateDTO.getName())
            .ape(userCreateDTO.getApe())
            .email(userCreateDTO.getEmail())
            .password(passwordEncoder.encode(userCreateDTO.getPassword()))
            .build();

        var savedUser = userRepository.save(user);

        return UserResponseDTO.builder()
            .id(savedUser.getId())
            .username(savedUser.getUsername())
            .name(savedUser.getNom())
            .ape(savedUser.getApe())
            .email(savedUser.getEmail())
            .build();
    }
}
