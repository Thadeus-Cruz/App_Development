package com.example.autogarage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.autogarage.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
