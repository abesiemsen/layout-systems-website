import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as moment from 'moment';

import {
  Configuration, Course, Project,
  Person, Instructor, Student, Deliverable
} from '@app/definitions';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private configuration: Configuration;
  private config = 'https://gist.githubusercontent.com/abesiemsen/00043f6ce1a3d1dad4e897bfe540ab83/raw/applications2018spring.wudesign.me.json';


  constructor(private http: HttpClient) { }

  load(): Promise<Configuration> {
    if (this.configuration) {
      return Promise.resolve(this.configuration);
    }
    return this.http.get(this.config)
      .toPromise()
      .then((configuration: Configuration) => this.configuration = configuration);
  }

  course(): Promise<Course> {
    return this.load()
      .then((configuration: Configuration) => configuration.course);
  }

  instructors(): Promise<Instructor[]> {
    return this.course()
      .then((course: Course) => course.instructors);
  }

  instructor(slug): Promise<Instructor> {
    return this.instructors()
      .then((instructors: Instructor[]) => instructors
        .find((instructor: Instructor) => instructor.slug === slug));
  }

  students(): Promise<Student[]> {
    return this.course()
      .then((course: Course) => course.students);
  }

  student(slug): Promise<Student> {
    return this.students()
      .then((students: Student[]) => students
        .find((student: Student) => student.slug === slug));
  }

  persons(): Promise<Person[]> {
    return Promise.all([this.instructors(), this.students()])
      .then(responses => {
        const people: Person[] = [].concat(responses[0] as Person[], responses[1] as Person[]);
        return people;
      });
  }

  person(slug): Promise<Person> {
    return this.persons()
      .then((persons: Person[]) => persons
        .find((person: Person) => person.slug === slug));
  }

  projects(): Promise<Project[]> {
    return this.course()
      .then((course: Course) => course.projects);
  }

  project(slug): Promise<Project> {
    return this.projects()
      .then((projects: Project[]) => projects
        .find((project: Project) => project.slug === slug));
  }

  deliverables(): Promise<Deliverable[]> {
    return this.projects()
      .then((projects: Project[]) => projects
        .filter((project: Project) => project.hidden !== true)
        .reduce((accumulator: Deliverable[], project: Project) => {
          return accumulator
            .concat(project.deliverables
              .map((deliverable: Deliverable) => {
                deliverable.projectSlug = project.slug;
                return deliverable;
              }) as Deliverable[]
            );
        }, [])
        .sort((a: Deliverable, b: Deliverable) => moment(a.due).valueOf() - moment(b.due).valueOf())
      );
  }
}
