package com.blamovi.apiBlamovi.controllers;

import com.blamovi.apiBlamovi.dtos.UsuarioDto;
import com.blamovi.apiBlamovi.models.UsuarioModel;
import com.blamovi.apiBlamovi.repositories.UsuarioRepository;
import com.blamovi.apiBlamovi.services.FileUploadService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value = "/usuarios", produces = {"application/json"})
public class UsuarioController {
    @Autowired
    UsuarioRepository usuarioRepository;

//    @Autowired
//    FileUploadService fileUploadService;

    @GetMapping
    public ResponseEntity<List<UsuarioModel>> listarUsuario(){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.findAll());
    }

    @GetMapping("/{idUsuario}")
    public ResponseEntity<Object> buscarUsuario(@PathVariable(value = "idUsuario") UUID id){
        Optional<UsuarioModel> usuarioBuscado = usuarioRepository.findById(id);

        if (usuarioBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(usuarioBuscado.get());
    }

//    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
//    @Operation(summary = "Método para cadastrar um Usuário", method = "POST")
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "201", description = "Cadastro foi efetuado com sucesso"),
//            @ApiResponse(responseCode = "400", description = "Paramatros inválidos")
//    })
//    public ResponseEntity<Object> criarUsuario(@ModelAttribute @Valid UsuarioDto usuarioDto){
//        if (usuarioRepository.findByEmail(usuarioDto.email()) != null){
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email já cadastrado");
//        }
//
//        UsuarioModel novoUsuario = new UsuarioModel();
//        BeanUtils.copyProperties(usuarioDto, novoUsuario);
//
//        String urlImagem;
//
//        try{
//            urlImagem = fileUploadService.fazerUpload(usuarioDto.imagem());
//        }catch (IOException e){
//            throw new RuntimeException(e);
//        }
//
//        novoUsuario.setUrl_img(urlImagem);
//
//        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(novoUsuario));
//    }
//
//
//    @PutMapping(value = "/{idUsuario}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
//    public ResponseEntity<Object> editarUsuario(@PathVariable(value = "idUsuario") UUID id, @ModelAttribute @Valid UsuarioDto usuarioDto){
//
//        Optional<UsuarioModel> usuarioBuscado = usuarioRepository.findById(id);
//
//        if (usuarioBuscado.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
//        }
//
//        UsuarioModel usuarioBd = usuarioBuscado.get();
//        BeanUtils.copyProperties(usuarioDto, usuarioBd);
//
//        String urlImagem;
//
//        try{
//            urlImagem = fileUploadService.fazerUpload(usuarioDto.imagem());
//        }catch (IOException e){
//            throw new RuntimeException(e);
//        }
//
//        usuarioBd.setUrl_img(urlImagem);
//
//        return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.save(usuarioBd));
//    }
//
//    @DeleteMapping("/{idUsuario}")
//    public ResponseEntity<Object> deletarUsuario(@PathVariable(value = "idUsuario") UUID id){
//        Optional<UsuarioModel> usuarioBuscado = usuarioRepository.findById(id);
//
//        if (usuarioBuscado.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
//        }
//        usuarioRepository.delete(usuarioBuscado.get());
//        return ResponseEntity.status(HttpStatus.OK).body("Usuario deletado com sucesso!");
//    }

}
