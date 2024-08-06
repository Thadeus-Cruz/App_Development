package com.example.autogarage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.autogarage.model.Garage;

public interface GarageRepository extends JpaRepository<Garage, Long> {
}
