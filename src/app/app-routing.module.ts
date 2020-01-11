import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { StudentsComponent } from './pages/students/students.component';
import { StudentComponent } from './pages/student/student.component';
import { DeliverablesComponent } from './pages/deliverables/deliverables.component';


const routes: Routes = [
  {
    path: 'syllabus',
    component: SyllabusComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'project/:slug',
    component: ProjectComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'student/:slug',
    component: StudentComponent
  },
  {
    path: 'deliverables',
    component: DeliverablesComponent
  },
  {
    path: '',
    redirectTo: '/syllabus',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
