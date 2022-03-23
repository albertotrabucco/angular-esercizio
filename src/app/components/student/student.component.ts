import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student: Student = {
    id: 3,
    name:'Franca'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
