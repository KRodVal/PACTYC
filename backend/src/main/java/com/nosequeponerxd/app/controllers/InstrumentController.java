package com.nosequeponerxd.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nosequeponerxd.app.entity.model.Instrument;
import com.nosequeponerxd.app.entity.service.IInstrumentService;

@CrossOrigin(origins = "*")
@RestController
public class InstrumentController {
	
	@Autowired
	IInstrumentService instrumentService;

	@GetMapping("/instruments")
	public List<Instrument> getAllUsers() {
		return instrumentService.getAll();
	}
	
	@GetMapping("/instruments/{id}") 
	public Instrument getOne(@PathVariable(value = "id") long id) {
		return instrumentService.get(id);		
	}
	
	@PostMapping("/instruments")
	public void post(Instrument appuser) {
		instrumentService.post(appuser);
	}
	
	@PutMapping("/instruments/{id}")
	public void put(Instrument appuser, @PathVariable(value = "id") long id) {
		instrumentService.put(appuser, id);
	}
	
	@DeleteMapping("/instruments/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		instrumentService.delete(id);
	}
}
