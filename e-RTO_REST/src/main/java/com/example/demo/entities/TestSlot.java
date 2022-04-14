package com.example.demo.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="test_slots")
public class TestSlot 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int test_slot_id;
	@JsonFormat( pattern = "yyyy-mm-dd")
	@Column
	private Date test_date;
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "slot_id")
	private Slot slot;
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "application_id")
	private Application app;
	
	public TestSlot() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TestSlot(Date test_date, Slot slot, Application app) {
		super();
		this.test_date = test_date;
		this.slot = slot;
		this.app = app;
	}

	
	
	

	public int getTest_slot_id() {
		return test_slot_id;
	}

	public void setTest_slot_id(int test_slot_id) {
		this.test_slot_id = test_slot_id;
	}

	public Date getTest_date() {
		return test_date;
	}

	public void setTest_date(Date test_date) {
		this.test_date = test_date;
	}

	public Slot getSlot() {
		return slot;
	}

	public void setSlot(Slot slot) {
		this.slot = slot;
	}

	public Application getApp() {
		return app;
	}

	public void setApp(Application app) {
		this.app = app;
	}

	@Override
	public String toString() {
		return "TestSlot [test_slot_id=" + test_slot_id + ", test_date=" + test_date + ", slot=" + slot + ", app=" + app
				+ "]";
	}
	
	
}
