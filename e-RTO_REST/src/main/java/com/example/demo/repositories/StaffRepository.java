package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Staff;
import com.example.demo.entities.User;

@Repository
public interface StaffRepository extends JpaRepository<Staff,Integer> {
	@Query(value= "SELECT c FROM Staff c WHERE user= :uid")
	public Staff findByUid(User uid);
}
