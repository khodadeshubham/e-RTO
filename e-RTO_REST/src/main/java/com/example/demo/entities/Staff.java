package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="staffs")
public class Staff
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int staff_id;
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String contact_no;
	@Column
	private String designation;
	//@JsonIgnoreProperties("user_id")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	
	public Staff() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Staff(String fname, String lname, String contact_no, String designation, User user) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.designation = designation;
		this.user = user;
	}

	public Staff(int staff_id, String fname, String lname, String contact_no, String designation, User user) {
		super();
		this.staff_id = staff_id;
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.designation = designation;
		this.user = user;
	}

	public Staff(String fname, String lname, String contact_no, String designation) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.designation = designation;
	}

	public int getStaff_id() {
		return staff_id;
	}

	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
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

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	
}
