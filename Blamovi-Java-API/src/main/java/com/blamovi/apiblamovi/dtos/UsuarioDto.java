package com.blamovi.apiBlamovi.dtos;

import jakarta.validation.constraints.NotBlank;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

public record UsuarioDto(
        @NotBlank String nome,
        @NotBlank String email,
        @NotBlank String senha,
        @NotBlank String apelido,
        Date data_nasc,
        MultipartFile imagem

) {}
