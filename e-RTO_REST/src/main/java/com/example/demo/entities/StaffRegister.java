package com.example.demo.entities;

public class StaffRegister
{
	private String fname;
	private String lname;
	private String contact_no;
	private String designation;
	private String email;
	private String password;
	
	
	public StaffRegister() {
		super();
		// TODO Auto-generated constructor stub
	}


	public StaffRegister(String fname, String lname, String contact_no, String designation, String email,
			String password) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.designation = designation;
		this.email = email;
		this.password = password;
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


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
