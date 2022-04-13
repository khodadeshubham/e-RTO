package com.example.demo.entities;

import java.util.Date;

public class ApplicationRegister {
	String aadhar;
    Date dob ;
    String blood_group;
    String gender;
    String identification_mark;
    String present_address;
    String permanent_address;
    String application_type;
    int citizen_id;
    
	public ApplicationRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ApplicationRegister(String aadhar, Date dOB, String blood_group, String gender, String identification_mark,
			String present_address, String permanent_address,String application_type, int citizen_id) {
		super();
		this.aadhar = aadhar;
		this.dob = dOB;
		this.blood_group = blood_group;
		this.gender = gender;
		this.identification_mark = identification_mark;
		this.present_address = present_address;
		this.permanent_address = permanent_address;
		this.application_type= application_type;
		this.citizen_id = citizen_id;
	}
	public String getAadhar() {
		return aadhar;
	}
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	public Date getDOB() {
		return dob;
	}
	public void setDOB(Date dOB) {
		dob = dOB;
	}
	public String getBlood_group() {
		return blood_group;
	}
	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getIdentification_mark() {
		return identification_mark;
	}
	public void setIdentification_mark(String identification_mark) {
		this.identification_mark = identification_mark;
	}
	public String getPresent_address() {
		return present_address;
	}
	public void setPresent_address(String present_address) {
		this.present_address = present_address;
	}
	public String getPermanent_address() {
		return permanent_address;
	}
	public void setPermanent_address(String permanent_address) {
		this.permanent_address = permanent_address;
	}

	public String getApplication_type() {
		return application_type;
	}
	public void setApplication_type(String application_type) {
		this.application_type = application_type;
	}
	public int getCitizen_id() {
		return citizen_id;
	}
	public void setCitizen_id(int citizen_id) {
		this.citizen_id = citizen_id;
	}
	@Override
	public String toString() {
		return "ApplicationRegister [aadhar=" + aadhar + ", DOB=" + dob + ", blood_group=" + blood_group + ", gender="
				+ gender + ", identification_mark=" + identification_mark + ", present_address=" + present_address
				+ ", permanent_address=" + permanent_address + ", citizen_id=" + citizen_id + "]";
	}
    
    
    
  
}
