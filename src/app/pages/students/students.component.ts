import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from '@app/services';
import { Student } from '@app/definitions';

@Component({
  selector: 'wu-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(
    private configuration: ConfigurationService
  ) { }

  ngOnInit() {
    this.configuration.students()
      .then(students => this.students = students);
  }

}
