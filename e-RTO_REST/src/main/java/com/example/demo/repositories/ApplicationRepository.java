package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Application;
import com.example.demo.entities.Document;

@Repository
@Transactional
public interface ApplicationRepository extends JpaRepository<Application, Integer> {

	@Modifying
	@Query("update Application set doc = :doc_id where application_id= :app_id")
	public int updateDoc(int app_id, Document doc_id);
}
