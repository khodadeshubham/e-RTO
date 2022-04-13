package com.example.demo.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Application;
import com.example.demo.entities.Slot;
import com.example.demo.entities.SlotBook;
import com.example.demo.entities.TestSlot;
import com.example.demo.services.ApplicationService;
import com.example.demo.services.TestSlotService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TestSlotController
{
	@Autowired
	TestSlotService tsservice;
	
	@Autowired
	ApplicationService appservice;
	
	@GetMapping("/getfreeslots")
	public List<Slot> getFreeSlot(@RequestParam String date) throws ParseException
	{
		try
		{
			//Date d=new SimpleDateFormat("yyyy-mm-dd").parse(date); 
			//System.out.print(d);
			return tsservice.getFreeSlots(date);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}	
		return null;
		
	}
	
	@PostMapping("/bookslot")
	public TestSlot bookSlot(@RequestBody SlotBook t) throws ParseException
	{
		
		int cid= t.getCid();
		int slotId= t.getSlot_id();
		Date d=new SimpleDateFormat("yyyy-mm-dd").parse(t.getDate()); 
		return tsservice.bookSlot(cid, slotId, d);
	}
}
