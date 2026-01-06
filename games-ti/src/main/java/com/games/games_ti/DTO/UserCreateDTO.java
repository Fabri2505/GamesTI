package com.games.games_ti.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateDTO {
    private String username;
    private String name;
    private String ape;
    
    @NotBlank(message = "Email no puede estar vacío")
    @Email(message = "Email debe ser válido")
    private String email;

    @NotBlank(message = "Contraseña no puede estar vacía")
    @Size(min = 8, message = "Contraseña debe tener al menos 8 caracteres")
    private String password;
}
