package com.example.autogarage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.autogarage.model.Garage;
import com.example.autogarage.repository.GarageRepository;
import java.util.List;
import java.util.Optional;

@Service
public class GarageService {
    @Autowired
    private GarageRepository garageRepository;

    public List<Garage> getAllGarages() {
        return garageRepository.findAll();
    }

    public Optional<Garage> getGarageById(Long id) {
        return garageRepository.findById(id);
    }

    public Garage saveGarage(Garage garage) {
        return garageRepository.save(garage);
    }

    public void deleteGarage(Long id) {
        garageRepository.deleteById(id);
    }

    public Garage updateGarage(Long id, Garage garageDetails) {
        Optional<Garage> optionalGarage = garageRepository.findById(id);
        if (optionalGarage.isPresent()) {
            Garage garage = optionalGarage.get();
            garage.setOwnerId(garageDetails.getOwnerId());
            garage.setName(garageDetails.getName());
            garage.setGarageName(garageDetails.getGarageName());
            garage.setRating(garageDetails.getRating());
            garage.setAddressId(garageDetails.getAddressId());
            garage.setDoorNo(garageDetails.getDoorNo());
            garage.setStreet(garageDetails.getStreet());
            garage.setTown(garageDetails.getTown());
            garage.setCity(garageDetails.getCity());
            garage.setState(garageDetails.getState());
            garage.setPinCode(garageDetails.getPinCode());
            return garageRepository.save(garage);
        }
        return null;
    }
}
