package com.blamovi.apiBlamovi.controllers;


import com.blamovi.apiBlamovi.models.ComentarioModel;
import com.blamovi.apiBlamovi.models.UsuarioModel;
import com.blamovi.apiBlamovi.repositories.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value = "/comentarios", produces = {"application/json"})

public class ComentarioController {

    @Autowired
    ComentarioRepository comentarioRepository;

    @GetMapping
    public ResponseEntity<List<ComentarioModel>> listarComentarios(){
        return ResponseEntity.status(HttpStatus.OK).body(comentarioRepository.findAll());
    }

    @GetMapping("/{idComentario}")
    public ResponseEntity<Object> buscarComentario(@PathVariable(value = "idComentario") UUID id){
        Optional<ComentarioModel> comentarioBuscado = comentarioRepository.findById(id);

        if (comentarioBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Comentario não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(comentarioBuscado.get());
    }
}
