package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Citizen;
import com.example.demo.entities.CitizenRegister;
import com.example.demo.entities.User;
import com.example.demo.services.CitizenService;
import com.example.demo.services.StaffService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CitizenController
{
	@Autowired
	UserService uservice;
	
	@Autowired
	CitizenService cservice;
	
	@Autowired
	StaffService sservice;
	
	@PostMapping("/citizenreg")
	public Citizen regCitizen(@RequestBody CitizenRegister nc)
	{
		User u= new User(nc.getEmail(), nc.getPassword(), "citizen");
		Citizen c= new Citizen(nc.getFname(), nc.getLname(), nc.getContact_no(), u);
		return cservice.regCitizen(c);
	}
	

}
