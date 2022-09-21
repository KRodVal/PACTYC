package com.nosequeponerxd.app.entity.service;

import java.util.List;

import com.nosequeponerxd.app.entity.model.AppUser;

public interface IAppUserService {
	public List<AppUser> getAll();
	public AppUser getOne(long id);
	
}
