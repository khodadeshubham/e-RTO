package com.example.demo.services;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Application;
import com.example.demo.entities.Citizen;
import com.example.demo.entities.Document;
import com.example.demo.entities.User;
import com.example.demo.repositories.ApplicationRepository;

@Service
public class ApplicationService
{
	@Autowired
	ApplicationRepository apprepo;
	
	public Application addApplication(Application a)
	{
		
		/*Document doc;
		Citizen c;
		Application app;
		try
		{
			doc= new Document(file1.getBytes(), file2.getBytes(),file3.getBytes());
			c= new Citizen(a.getCitizen().getFname(), a.getCitizen().getLname(), a.getCitizen().getContact_no(),
					a.getCitizen().getUser());
			
			app= new Application(a.getAadhar(),a.getDOB(),a.getBlood_group(),a.getGender(),a.getIdentification_mark(),
					a.getPresent_address(),a.getPermanent_address(),a.getApplication_type(),c,doc);
			
			return apprepo.save(app);
		}
		catch (IOException e)
		{
			return null;
		} */
		return apprepo.save(a);
	}
	
	public List<Application> getAllApp()
	{
		return apprepo.findAll();
		
	}
	
	public Application getAppById(int app_id)
	{
		return apprepo.findById(app_id).get();
	}
	
	public Application updateDoc(int app_id, Document doc_id)
	{
		int i = apprepo.updateDoc(app_id,doc_id);
		System.out.print(i);
		if(i==1)
			return getAppById(app_id);
		else
			return null;
	}
}
