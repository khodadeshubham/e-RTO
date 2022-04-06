package com.example.demo.entities;

import java.io.File;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "documents")
public class Document
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int doc_id;
	@Column
	private byte[] aadhar_card;
	@Column
	private byte[] photo;
	@Column
	private byte[] signature;
	
	public Document() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Document(byte[] aadhar_card, byte[] photo, byte[] signature) {
		super();
		this.aadhar_card = aadhar_card;
		this.photo = photo;
		this.signature = signature;
	}

	public Document(int doc_id, byte[] aadhar_card, byte[] photo, byte[] signature) {
		super();
		this.doc_id = doc_id;
		this.aadhar_card = aadhar_card;
		this.photo = photo;
		this.signature = signature;
	}

	public int getDoc_id() {
		return doc_id;
	}

	public void setDoc_id(int doc_id) {
		this.doc_id = doc_id;
	}

	public byte[] getAadhar_card() {
		return aadhar_card;
	}

	public void setAadhar_card(byte[] aadhar_card) {
		this.aadhar_card = aadhar_card;
	}

	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	public byte[] getSignature() {
		return signature;
	}

	public void setSignature(byte[] signature) {
		this.signature = signature;
	}

	
	
	
}
