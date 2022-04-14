package com.example.demo.repositories;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Slot;
import com.example.demo.entities.TestSlot;

@Repository
@Transactional
public interface TestSlotRepository extends JpaRepository<TestSlot, Integer> {

	@Query(value="select slot_id from slots  where slot_id not in(select ts.slot_id from ( select slot_id from test_slots  where test_date = :date )\r\n"
			+ " ts group by ts.slot_id having count(ts.slot_id)=5);",nativeQuery = true )
	public List<Integer> getFreeSlots(String date);
	
	@Modifying
	@Query(value="insert into test_slots (test_date, slot_id, application_id) values(:d, :slot_id, :appId)", nativeQuery = true)
	public int addTestSlot(Date d, int slot_id, int appId);
}
