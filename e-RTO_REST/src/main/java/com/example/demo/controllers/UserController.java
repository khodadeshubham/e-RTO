package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Citizen;
import com.example.demo.entities.Staff;
import com.example.demo.entities.User;
import com.example.demo.services.CitizenService;
import com.example.demo.services.StaffService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	@Autowired
	UserService uservice;
	
	@Autowired
	CitizenService cservice;
	
	@Autowired
	StaffService sservice;
	
	@PostMapping("/logincheck")
	public Object findUser(@RequestBody User u)
	{
		String email= u.getEmail();
		String password= u.getPassword();
		return uservice.loginCheck(email,password);
	}
	
	@GetMapping("/emailexist")
	public boolean checkEmailExist(@RequestParam String email)
	{
		System.out.print(email);
		return uservice.checkEmailExist(email);
	}

	@GetMapping("/getalluser")
	public List<User> findAllUsers()
	{
		return uservice.getAllUser();
	}
}
