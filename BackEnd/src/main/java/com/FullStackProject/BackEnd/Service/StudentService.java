package com.FullStackProject.BackEnd.Service;

import com.FullStackProject.BackEnd.Model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student studentinfo);

    public List<Student> allStudent();

    public String deleteStudent(int id);


}
