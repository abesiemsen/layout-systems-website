import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { ConfigurationService } from '@app/services';
import { Project } from '@app/definitions';

@Component({
  selector: 'wu-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(
    private configuration: ConfigurationService
  ) { }

  ngOnInit() {
    this.configuration.projects()
      .then(projects => this.projects = projects);
  }

  get visibleProjects(): Project[] {
    if (!this.projects) {
      return [];
    }
    return this.projects
      .filter(project => project.hidden !== true);
  }

  formatDate(date: string): string {
    return date ? moment(date).format('MMM D') : 'TBD';
  }

}
