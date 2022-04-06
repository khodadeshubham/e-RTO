package com.example.demo.entities;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonFormat;



@Entity
@Table(name="applications")
public class Application
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int application_id;
	@Column
	private Timestamp application_date;
	@Column
	private String aadhar;
	@JsonFormat(pattern = "yyyy-mm-dd")
	@Column(name="DOB")
	private Date dob;
	@Column
	private String blood_group;
	@Column
	private String gender;
	@Column
	private String identification_mark;
	@Column
	private String present_address;
	@Column
	private String permanent_address;
	@Column
	private String application_type;
	@Column
	private String application_status;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "citizen_id", referencedColumnName = "citizen_id")
	private Citizen citizen;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "doc_id")
	private Document doc;
	
	public Application() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Application(String aadhar, Date dOB, String blood_group, String gender, String identification_mark,
			String present_address, String permanent_address, String application_type, Citizen citizen, Document doc) {
		super();
		this.application_date= new Timestamp(new Date().getTime());
		this.aadhar = aadhar;
		this.dob = dOB;
		this.blood_group = blood_group;
		this.gender = gender;
		this.identification_mark = identification_mark;
		this.present_address = present_address;
		this.permanent_address = permanent_address;
		this.application_type = application_type;
		this.application_status = "pending";
		this.citizen = citizen;
		this.doc = doc;
	}

	

	public Application(int application_id, Timestamp application_date, String aadhar, Date dOB, String blood_group,
			String gender, String identification_mark, String present_address, String permanent_address,
			String application_type, String application_status, Citizen citizen, Document doc) {
		super();
		this.application_id = application_id;
		this.application_date = application_date;
		this.aadhar = aadhar;
		this.dob= dOB;
		this.blood_group = blood_group;
		this.gender = gender;
		this.identification_mark = identification_mark;
		this.present_address = present_address;
		this.permanent_address = permanent_address;
		this.application_type = application_type;
		this.application_status = application_status;
		this.citizen = citizen;
		this.doc = doc;
	}


	public int getApplication_id() {
		return application_id;
	}


	public void setApplication_id(int application_id) {
		this.application_id = application_id;
	}


	public Timestamp getApplication_date() {
		return application_date;
	}


	public void setApplication_date(Timestamp application_date) {
		this.application_date = application_date;
	}


	public String getAadhar() {
		return aadhar;
	}


	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}



	public Date getDob() {
		return dob;
	}


	public void setDob(Date dob) {
		this.dob = dob;
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


	public Document getDoc() {
		return doc;
	}


	public void setDoc(Document doc) {
		this.doc = doc;
	}


	public Citizen getCitizen() {
		return citizen;
	}


	public void setCitizen(Citizen citizen) {
		this.citizen = citizen;
	}


	public String getApplication_status() {
		return application_status;
	}


	public void setApplication_status(String application_status) {
		this.application_status = application_status;
	}


	@Override
	public String toString() {
		return "Application [application_id=" + application_id + ", application_date=" + application_date + ", aadhar="
				+ aadhar + ", dob=" + dob + ", blood_group=" + blood_group + ", gender=" + gender
				+ ", identification_mark=" + identification_mark + ", present_address=" + present_address
				+ ", permanent_address=" + permanent_address + ", application_type=" + application_type
				+ ", application_status=" + application_status + ", citizen=" + citizen + ", doc=" + doc + "]";
	}

	
	
}
