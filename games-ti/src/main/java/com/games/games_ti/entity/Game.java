package com.games.games_ti.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Double monto;
    private LocalDateTime fecJuego;
    private LocalDateTime fecCierre;
    private Boolean pausado;

    @ManyToOne
    @JoinColumn(name = "tipo_juego_id")
    private TipoJuego tipoJuego;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "serie_id")
    private Serie serie;

    @OneToMany(mappedBy = "game")
    private List<Ronda> rondas;
}
