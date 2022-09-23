package com.nosequeponerxd.app.entity.service;

import java.util.List;

import com.nosequeponerxd.app.entity.model.Instrument;

public interface IInstrumentService {
	public Instrument get(long id);
	public List<Instrument> getAll();
	public void post(Instrument instrument);
	public void put(Instrument instrument, long id);
	public void delete(long id);
}
