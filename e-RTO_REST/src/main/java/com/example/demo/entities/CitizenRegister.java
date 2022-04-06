package com.example.demo.entities;


public class CitizenRegister
{
	private String fname;
	private String lname;
	private String contact_no;
	private String email;
	private String password;
	private String role;
	
	public CitizenRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CitizenRegister(String fname, String lname, String contact_no, String email, String password, String role) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.email = email;
		this.password = password;
		this.role = role;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
}
