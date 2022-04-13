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
	
	@Query("select a from Application a where citizen_id= :cid and application_status='completed' and application_type='learning'")
	public Application checkLearningCompleted(int cid);
	
	@Query("select a from Application a where citizen_id= :cid and application_status='verified' and application_type='learning'")
	public Application getDocVerifiedApp(int cid);
	
	@Modifying
	@Query("update Application set application_status= :status where application_id= :app_id")
	public int updateStatus(int app_id, String status);
	
	@Query("select a from Application a where citizen_id= :cid")
	public Application checkStatus(int cid);
}
