import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    // this.studentService.getAllStudents().subscribe(data => {
    //   this.students = data;
    // });
    this.students = [
      { id: 1, firstName: 'John', lastName: 'Doe', enrollmentDate: new Date(), departmentId:6 },
      { id: 2, firstName: 'Jane Smith', lastName: 'Smith', enrollmentDate: new Date(), departmentId:7 }
    ];
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }
}
