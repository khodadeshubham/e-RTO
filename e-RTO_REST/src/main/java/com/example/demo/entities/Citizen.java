package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="citizens")
public class Citizen 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int citizen_id;
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String contact_no;
	
	//@JsonIgnoreProperties("user_id")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	
	public Citizen() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Citizen(String fname, String lname, String contact_no, User user) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.user = user;
	}

	public Citizen(int citizen_id, String fname, String lname, String contact_no, User user) {
		super();
		this.citizen_id = citizen_id;
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.user = user;
	}

	public Citizen(int citizen_id, String fname, String lname, String contact_no) {
		super();
		this.citizen_id = citizen_id;
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
	}



	public int getCitizen_id() {
		return citizen_id;
	}

	public void setCitizen_id(int citizen_id) {
		this.citizen_id = citizen_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	
	
}
