package com.nosequeponerxd.app.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.nosequeponerxd.app.entity.model.AppUser;

public interface IAppUserDao extends CrudRepository<AppUser, Long> {

}
