package com.nosequeponerxd.app.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nosequeponerxd.app.entity.dao.IInstrumentDao;
import com.nosequeponerxd.app.entity.model.Instrument;

@Service
public class InstrumentService implements IInstrumentService {
	
	@Autowired
	private IInstrumentDao instrumentDao;
	
	@Override
	public Instrument get(long id) {
		return instrumentDao.findById(id).get();
	}

	@Override
	public List<Instrument> getAll() {
		// TODO Auto-generated method stub
		return (List<Instrument>) instrumentDao.findAll();
	}

	@Override
	public void post(Instrument instrument) {
		// TODO Auto-generated method stub
		instrumentDao.save(instrument);
	}

	@Override
	public void put(Instrument instrument, long id) {
		// TODO Auto-generated method stub
		instrumentDao.findById(id).ifPresent((x)->{
			instrument.setId(id);
			instrumentDao.save(instrument);
		});
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		instrumentDao.deleteById(id);
	}
	
	

}
