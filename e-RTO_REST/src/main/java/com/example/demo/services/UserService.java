package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Citizen;
import com.example.demo.entities.Staff;
import com.example.demo.entities.User;
import com.example.demo.repositories.CitizenRepository;
import com.example.demo.repositories.StaffRepository;
import com.example.demo.repositories.UserRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Service
public class UserService 
{
	@Autowired
	UserRepository userrepo;
	
	@Autowired
	StaffRepository staffrepo;
	
	@Autowired
	CitizenRepository citizenrepo;
	
	public Object loginCheck(String email, String password)
	{
		User u= userrepo.loginCheck(email,password);
		
		if(u != null)
		{
			
			if(u.getRole().equals("staff"))
			{
				Staff s= staffrepo.findByUid(u);
				return s;
			}			
			else if(u.getRole().equals("citizen"))
			{
				Citizen c= citizenrepo.findByUid(u);				
				return c;
			}
			else if(u.getRole().equals("admin")	)	
			{				
				return u;
			}
		}
		return null;
		
	}

	
	public boolean checkEmailExist(String email)
	{
		User u= userrepo.checkEmailExist(email);
		if(u != null)
			return true;
		else
			return false;
	}
	
	public List<User> getAllUser()
	{
		return userrepo.findAll();
	}
}
