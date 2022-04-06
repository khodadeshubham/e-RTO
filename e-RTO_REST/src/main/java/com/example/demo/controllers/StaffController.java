package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Staff;
import com.example.demo.entities.StaffRegister;
import com.example.demo.entities.User;
import com.example.demo.services.CitizenService;
import com.example.demo.services.StaffService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StaffController
{
	@Autowired
	UserService uservice;
	
	@Autowired
	CitizenService cservice;
	
	@Autowired
	StaffService sservice;
	
	@PostMapping("/staffreg")
	public Staff regStaff(@RequestBody StaffRegister ns)
	{
		User u= new User(ns.getEmail(), ns.getPassword(), "staff");
		Staff s= new Staff(ns.getFname(), ns.getLname(), ns.getContact_no(),ns.getDesignation(), u);
		return sservice.regStaff(s);
	}

}
