package com.example.demo.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Application;
import com.example.demo.entities.ApplicationRegister;
import com.example.demo.entities.Citizen;
import com.example.demo.entities.Document;
import com.example.demo.services.ApplicationService;
import com.example.demo.services.CitizenService;
import com.example.demo.services.DocumentService;

@CrossOrigin(value = "http://localhost:3000")
@RestController
public class ApplicationController
{
	@Autowired
	ApplicationService appservice;
	
	@Autowired
	CitizenService cservice;
	
	@Autowired
	DocumentService dservice;
	
	@PostMapping("/addapplication")
	public Application addApplication(@RequestBody ApplicationRegister a)
	{
		System.out.print(a);
		Citizen c = cservice.getCitizen(a.getCitizen_id());
		
		Application app = new Application(a.getAadhar(),a.getDOB(),a.getBlood_group(),a.getGender(),a.getIdentification_mark(),a.getPresent_address(), a.getPermanent_address(), "learning", c , null);
		return appservice.addApplication(app);
		

		
		
		//(String aadhar, Date dOB, String blood_group, String gender, String identification_mark,
				//String present_address, String permanent_address, String application_type, Citizen citizen, Document doc
	}
	
	@PostMapping("/addapplicationdocs/{aid}")
	public Application addApplication(@PathVariable int aid,
			@RequestPart("file1") MultipartFile file1,@RequestPart("file2") MultipartFile file2,
			@RequestPart("file3") MultipartFile file3)
	{
		try
		{
			Document d = new Document(file1.getBytes() ,file2.getBytes()  , file3.getBytes() );
			Document inserted =dservice.save(d);
			Application a= appservice.updateDoc(aid , inserted);
			System.out.print(a);
			return a;
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return new Application();
		
		

	}
	
	
	
	@GetMapping("/getallapp")
	public List<Application> getAllApp()
	{
		return appservice.getAllApp();
	}
	
	@GetMapping("/getAppById/{application_id}")
	public Application getAppById(@PathVariable int application_id)
	{
		return appservice.getAppById(application_id);
	}
}
