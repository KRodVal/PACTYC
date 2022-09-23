package com.nosequeponerxd.app.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.nosequeponerxd.app.entity.model.Instrument;

public interface IInstrumentDao extends CrudRepository<Instrument, Long> {

}
