import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../services/student-list.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service: StudentListService) { }

  students: any[] = [];
  student: any;

  openBox() {
    //   console.log(this.student.id);
    const box = <HTMLElement>document.getElementById('lightBox');
    box.style.display = 'block';
  }
  closeBox() {
    const box = <HTMLElement>document.getElementById('lightBox');
    box.style.display = 'none';
  }
  getDetails(studId: number) {
    this.openBox();
    return this.service.getStudentByID(studId).subscribe(data => {
      this.student = data;
      console.log(data);
    });
  }
  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.students = data;
      console.log(data);
    });

  }

}
