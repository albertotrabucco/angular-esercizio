import { Component, OnInit } from '@angular/core';
import { STUDENTSMOCKDATA } from '../mockstudent';
import { Student } from '../student';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = STUDENTSMOCKDATA;
  selectedStudent ?: Student;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(studente: Student){
    this.selectedStudent = studente;
  }
}
