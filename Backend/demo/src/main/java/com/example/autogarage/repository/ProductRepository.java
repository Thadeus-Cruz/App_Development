package com.example.autogarage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.autogarage.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
