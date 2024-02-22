package com.blamovi.apiBlamovi.repositories;

import com.blamovi.apiBlamovi.models.VideosModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VideosRepository extends JpaRepository<VideosModel, UUID> {
}