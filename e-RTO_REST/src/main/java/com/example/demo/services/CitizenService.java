package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Citizen;
import com.example.demo.repositories.CitizenRepository;

@Service
public class CitizenService
{
	@Autowired
	CitizenRepository citizenrepo;
	
	public Citizen regCitizen(Citizen c)
	{
		return citizenrepo.save(c);
	}
	
	public Citizen getCitizen(int cid)
	{
		return citizenrepo.findById(cid).get();
	}
}
