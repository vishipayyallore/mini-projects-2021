import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/shared/top-navbar/top-navbar.component';
import { FormsModule } from '@angular/forms';
import { ProfessorsListComponent } from './components/professors/professors-list/professors-list.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RatingComponent } from './components/shared/rating/rating.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { PageNotfoundComponent } from './components/shared/page-notfound/page-notfound.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from './components/shared/full-calendar/full-calendar.component';
import { ShowCalendarComponent } from './components/shared/show-calendar/show-calendar.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    ProfessorsListComponent,
    FooterComponent,
    RatingComponent,
    EmployeesListComponent,
    DashboardComponent,
    PageNotfoundComponent,
    FullCalendarComponent,
    ShowCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
