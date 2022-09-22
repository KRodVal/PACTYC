package com.nosequeponerxd.app.entity.service;

import java.util.List;

import com.nosequeponerxd.app.entity.model.AppUser;

public interface IAppUserService {
	public AppUser get(long id);
	public List<AppUser> getAll();
	public void post(AppUser appuser);
	public void put(AppUser appuser, long id);
	public void delete(long id);
}
