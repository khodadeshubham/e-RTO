package com.example.demo.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Application;
import com.example.demo.entities.Citizen;
import com.example.demo.entities.Slot;
import com.example.demo.entities.TestSlot;
import com.example.demo.repositories.ApplicationRepository;
import com.example.demo.repositories.SlotRepository;
import com.example.demo.repositories.TestSlotRepository;

@Service
public class TestSlotService
{
	@Autowired
	TestSlotRepository tsrepo;
	
	@Autowired
	ApplicationRepository apprepo;
	
	@Autowired
	SlotRepository slotrepo;
	
	public List<Slot> getFreeSlots(String date)
	{
		List<Integer>slotIds= tsrepo.getFreeSlots(date);
		List<Slot> slots= new ArrayList<Slot>(); 
		for(Integer i: slotIds)
		{
			Optional<Slot> oc = slotrepo.findById(i);
			Slot s;
			try
			{
				s = oc.get();
				slots.add(s);
			}
			catch(NoSuchElementException e)
			{
				s = null;
			}
		}
		
		return slots;
	}
	
	public TestSlot bookSlot(Application a, int slot_id, Date date)
	{
		//Application a= apprepo.getDocVerifiedApp(cid);
		//System.out.println(a);
		Slot s= slotrepo.getById(slot_id);
		System.out.println(s);
		TestSlot ts= new TestSlot(date, s, a);
		
		TestSlot newts= tsrepo.save(ts);
		return newts;
	}
	
	/*public int slotbook(Date d, int slot_id, int appid)
	{
		return tsrepo.addTestSlot(d, slot_id, appid);
	}*/
}
