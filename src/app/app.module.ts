import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliverableLinkComponent } from './components/deliverable-link/deliverable-link.component';
import { HelpComponent } from './components/help/help.component';
import { DeliverablesComponent } from './pages/deliverables/deliverables.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentsComponent } from './pages/students/students.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';

const pages = [
  DeliverablesComponent,
  ProjectComponent,
  ProjectsComponent,
  StudentComponent,
  StudentsComponent,
  SyllabusComponent
];

const components = [
  DeliverableLinkComponent,
  HelpComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
