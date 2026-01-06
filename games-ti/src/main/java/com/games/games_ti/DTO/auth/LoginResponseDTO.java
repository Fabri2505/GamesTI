package com.games.games_ti.DTO.auth;

import com.games.games_ti.DTO.UserResponseDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class LoginResponseDTO {
    private String token;
    private String tipo; 
    private UserResponseDTO user;
}
