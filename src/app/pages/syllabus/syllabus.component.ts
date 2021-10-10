import { Component, OnInit } from '@angular/core';

import { ConfigurationService, SyllabusService } from '@app/services';
import { Course } from '@app/definitions';

@Component({
  selector: 'wu-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {

  course: Course;
  syllabusHtml: string;

  constructor(
    private configuration: ConfigurationService,
    private syllabus: SyllabusService
  ) { }

  ngOnInit() {
    this.configuration.course()
      .then((course: Course) => {
        this.course = course;
        return this.syllabus.load(this.course.syllabus);
      })
      .then((syllabusHtml: string) => {
        this.syllabusHtml = syllabusHtml;
      });
  }

}
