package com.blamovi.apiBlamovi.dtos;

public record PostDto(
        Integer quantidade_curtida,
        String texto,
        String foto_post
) {}
