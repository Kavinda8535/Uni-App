import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../shared/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-detail',
  //standalone: true,
  //imports: [],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit {
  student!: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe(data => {
      this.student = data;
    });
  }
}
