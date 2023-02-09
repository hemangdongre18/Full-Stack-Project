package com.FullStackProject.BackEnd.Service;

import com.FullStackProject.BackEnd.Model.Student;
import com.FullStackProject.BackEnd.Repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentServiceIMPL implements StudentService {
    @Autowired
    private Repository repository;


    @Override
    public List<Student> allStudent() {
        return repository.findAll();
    }

    @Override
    public String deleteStudent(int id) {
        repository.deleteById(id);
        return("Deleted Successfuly");
    }

    @Override
    public Student saveStudent(Student studentinfo) {
        return repository.save(studentinfo);


    }
}
