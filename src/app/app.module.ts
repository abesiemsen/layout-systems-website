import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliverableLinkComponent } from './components';
import { TelPipe } from './pipes';
import {
  DeliverablesComponent, ProjectComponent, ProjectsComponent,
  StudentComponent, StudentsComponent, SyllabusComponent
} from './pages';

const pages = [
  DeliverablesComponent,
  ProjectComponent,
  ProjectsComponent,
  StudentComponent,
  StudentsComponent,
  SyllabusComponent
];

const components = [
  DeliverableLinkComponent
];

const pipes = [
  TelPipe
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...components,
    ...pipes,
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
