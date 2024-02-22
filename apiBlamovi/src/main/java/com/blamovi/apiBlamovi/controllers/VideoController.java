package com.blamovi.apiBlamovi.controllers;


import com.blamovi.apiBlamovi.models.UsuarioModel;
import com.blamovi.apiBlamovi.models.VideosModel;
import com.blamovi.apiBlamovi.repositories.VideosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/videos", produces = {"application/json"})

public class VideoController {

    @Autowired
    VideosRepository videosRepository;

    @GetMapping
    public ResponseEntity<List<VideosModel>> listarVideos(){
        return ResponseEntity.status(HttpStatus.OK).body(videosRepository.findAll());
    }

    @GetMapping("/{idVideo}")
    public ResponseEntity<Object> buscarVideo(@PathVariable(value = "idVideo") UUID id){
        Optional<VideosModel> videoBuscado = videosRepository.findById(id);

        if (videoBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Video não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(videoBuscado.get());
    }
}
