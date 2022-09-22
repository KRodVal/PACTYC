package com.nosequeponerxd.app.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nosequeponerxd.app.entity.dao.IAppUserDao;
import com.nosequeponerxd.app.entity.model.AppUser;

@Service
public class AppUserService implements IAppUserService {
	
	@Autowired
	private IAppUserDao appUserDao;
	
	@Override
	public AppUser get(long id) {
		return null;
	}

	@Override
	public List<AppUser> getAll() {
		return null;
	}

	@Override
	public void post(AppUser appuser) {
		
	}
	
	@Override
	public void put(AppUser appuser, long id) {
		
	}

	@Override
	public void delete(long id) {
		
	}
	
	

}
