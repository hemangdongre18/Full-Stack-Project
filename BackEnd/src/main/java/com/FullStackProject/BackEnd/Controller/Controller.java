package com.FullStackProject.BackEnd.Controller;

import com.FullStackProject.BackEnd.Model.Student;
import com.FullStackProject.BackEnd.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class Controller {
    @Autowired
    private StudentService studentService;

    @PostMapping("/addStudent")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return ("Student added successfully");
    }

    @GetMapping("/getAllStudent")
    public List<Student> allStudent(){
        return studentService.allStudent();
    }

    @DeleteMapping("/deleteByid")
    public String deleteByID(@RequestBody int id){
        System.out.println(id);
        studentService.deleteStudent(id);
        return("Student with "+id+" deleted Successfully");
    }

}
