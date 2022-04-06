package com.example.demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Citizen;
import com.example.demo.entities.User;

@Repository
public interface CitizenRepository extends JpaRepository<Citizen, Integer> {

	@Query(value= "SELECT c FROM Citizen c WHERE user= :uid")
	public Citizen findByUid(User uid);
}
