import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { ProfessorV3Component } from './components/professorv3/professorv3.component';
import { ProfessorComponent } from './components/professor/professor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorV3Component,
    TopNavbarComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
