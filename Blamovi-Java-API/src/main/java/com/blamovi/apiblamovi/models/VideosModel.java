package com.blamovi.apiBlamovi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "video")
public class VideosModel implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_video", nullable = false)
    private UUID id;

    private String titulo;
    private String genero;
    private String diretor;
    private Integer temporadas;
    private String sinopse;
    private String ano;
    private Integer curtida;
    private String elenco;
    private String tipo;
    private String poster;
    private String trailer;
    private String classificacao;
    private float nota_total;
    private float quantidade_post;

}