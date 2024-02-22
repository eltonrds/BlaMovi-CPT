package com.blamovi.apiBlamovi.controllers;


import com.blamovi.apiBlamovi.models.ComentarioModel;
import com.blamovi.apiBlamovi.models.PostModel;
import com.blamovi.apiBlamovi.repositories.PostRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value = "/posts", produces = {"application/json"})
public class PostController {

    @Autowired
    PostRepository postRepository;

    @GetMapping
    public ResponseEntity<List<PostModel>> listarPost(){
        return ResponseEntity.status(HttpStatus.OK).body(postRepository.findAll());
    }

    @GetMapping("/{idPost}")
    public ResponseEntity<Object> buscarPost(@PathVariable(value = "idPost") UUID id){
        Optional<PostModel> postBuscado = postRepository.findById(id);

        if (postBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(postBuscado.get());
    }

    @PutMapping("/curtir/{idPost}")
    public ResponseEntity<Object> curtir(@PathVariable(value = "idPost") UUID id) {
        Optional<PostModel> postBuscado = postRepository.findById(id);

        if (postBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post não encontrado");
        }

        PostModel post = postBuscado.get();

        if(post.getQuantidade_curtida() == null){
            post.setQuantidade_curtida(0);
        }

        post.setQuantidade_curtida( post.getQuantidade_curtida() + 1);
        postRepository.save(post);

        return ResponseEntity.status(HttpStatus.OK).body("Curtidas: " + post.getQuantidade_curtida());
    }
}
