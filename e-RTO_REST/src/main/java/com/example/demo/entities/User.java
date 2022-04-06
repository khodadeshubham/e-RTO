package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String role;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public User(String email, String password, String role) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
	}
	

	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}


	public User(int user_id, String email, String password, String role) {
		super();
		this.user_id = user_id;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
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
