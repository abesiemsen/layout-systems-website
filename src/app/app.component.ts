import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfigurationService } from '@app/services';
import { Course } from '@app/definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'layout-systems-website';
  course: Course;

  constructor(
    private configuration: ConfigurationService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.configuration.course()
      .then((course: Course) => {
        this.course = course;
        this.titleService.setTitle(course.name);
      });
  }

}
