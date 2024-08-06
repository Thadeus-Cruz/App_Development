package com.example.autogarage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.autogarage.model.Garage;
import com.example.autogarage.service.GarageService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/garages")
public class GarageController {
    @Autowired
    private GarageService garageService;

    @GetMapping
    public List<Garage> getAllGarages() {
        return garageService.getAllGarages();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Garage> getGarageById(@PathVariable Long id) {
        Optional<Garage> garage = garageService.getGarageById(id);
        return garage.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Garage createGarage(@RequestBody Garage garage) {
        return garageService.saveGarage(garage);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Garage> updateGarage(@PathVariable Long id, @RequestBody Garage garageDetails) {
        Garage updatedGarage = garageService.updateGarage(id, garageDetails);
        return updatedGarage != null ? ResponseEntity.ok(updatedGarage) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGarage(@PathVariable Long id) {
        garageService.deleteGarage(id);
        return ResponseEntity.ok().build();
    }
}
