import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { ConfigurationService, LinkService } from '@app/services';
import { Project, Deliverable, Person } from '@app/definitions';

@Component({
  selector: 'wu-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  ready = false;
  project: Project;
  persons: Person[];

  constructor(
    private configuration: ConfigurationService,
    public linkService: LinkService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const slug: string = this.route.snapshot.paramMap.get('slug');
    Promise.all([
      this.loadProject(slug),
      this.loadPersons()
    ])
      .then(() => this.ready = true);
  }

  private loadProject(slug): Promise<Project> {
    return this.configuration.project(slug)
      .then((project: Project) => this.project = project);
  }

  private loadPersons(): Promise<Person[]> {
    // return this.configuration.students()
    return this.configuration.persons()
      .then((persons: Person[]) => this.persons = persons);
  }

  public get visibleDeliverables(): Deliverable[] {
    if (!this.project) {
      return [];
    }
    return this.project.deliverables
      .filter(deliverable => deliverable.hidden !== true);
  }

  formatDate(date: string): string {
    return moment(date).format('MMM D');
  }

  have(value: any[]): boolean {
    return !!value && !!value.length;
  }

}
