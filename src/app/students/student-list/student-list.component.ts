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
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }
}
