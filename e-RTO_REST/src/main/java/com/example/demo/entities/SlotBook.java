package com.example.demo.entities;

public class SlotBook
{
	int cid;
	int slot_id;
	String date;
	
	public SlotBook() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SlotBook(int cid, int slot_id, String date) {
		super();
		this.cid = cid;
		this.slot_id = slot_id;
		this.date = date;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public int getSlot_id() {
		return slot_id;
	}

	public void setSlot_id(int slot_id) {
		this.slot_id = slot_id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
}
