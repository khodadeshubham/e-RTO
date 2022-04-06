package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Document;
import com.example.demo.repositories.DocumentRepository;

@Service
public class DocumentService {
	
	@Autowired
	DocumentRepository drepo;
	
	public Document save(Document d)
	{
		return drepo.save(d);
	}
}
