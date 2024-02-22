package com.blamovi.apiBlamovi.repositories;

import com.blamovi.apiBlamovi.models.ComentarioModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ComentarioRepository extends JpaRepository<ComentarioModel, UUID> {
}