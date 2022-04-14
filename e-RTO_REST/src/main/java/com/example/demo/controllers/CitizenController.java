package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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
	
	@Autowired
	JavaMailSender sender;
	
	@PostMapping("/citizenreg")
	public Citizen regCitizen(@RequestBody CitizenRegister nc)
	{
		User u= new User(nc.getEmail(), nc.getPassword(), "citizen");
		Citizen c= new Citizen(nc.getFname(), nc.getLname(), nc.getContact_no(), u);
		Citizen newCitizen= cservice.regCitizen(c);
		if(newCitizen != null)
		{
			SimpleMailMessage mail= new SimpleMailMessage();
			mail.setFrom("ertosystem4@gmail.com");
			mail.setTo(newCitizen.getUser().getEmail());
			mail.setSubject("e-RTO Registration");
			mail.setText("Your have successfully registered on e-RTO.");
			sender.send(mail);
		}
		return newCitizen;
	}
	

}
