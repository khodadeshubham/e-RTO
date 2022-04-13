package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Slot;

@Repository
public interface SlotRepository extends JpaRepository<Slot, Integer> {

}
