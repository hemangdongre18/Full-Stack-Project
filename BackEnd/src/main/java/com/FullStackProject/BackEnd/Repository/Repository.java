package com.FullStackProject.BackEnd.Repository;

import com.FullStackProject.BackEnd.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Student, Integer> {

}
