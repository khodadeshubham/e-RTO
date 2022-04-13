package com.example.demo.entities;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="slots")
public class Slot
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int slot_id;
	@Column
	private Time start_time;
	@Column
	private Time end_time;
	
	public Slot() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Slot(int slot_id, Time start_time, Time end_time) {
		super();
		this.slot_id = slot_id;
		this.start_time = start_time;
		this.end_time = end_time;
	}



	public int getSlot_id() {
		return slot_id;
	}

	public void setSlot_id(int slot_id) {
		this.slot_id = slot_id;
	}

	public Time getStart_time() {
		return start_time;
	}

	public void setStart_time(Time start_time) {
		this.start_time = start_time;
	}

	public Time getEnd_time() {
		return end_time;
	}

	public void setEnd_time(Time end_time) {
		this.end_time = end_time;
	}


	@Override
	public String toString() {
		return "Slot [slot_id=" + slot_id + ", start_time=" + start_time + ", end_time=" + end_time + "]";
	}
	
	
	
}
