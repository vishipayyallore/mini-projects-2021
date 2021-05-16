import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { ProfessorsListComponent } from './components/professors/professors-list/professors-list.component';
import { PageNotfoundComponent } from './components/shared/page-notfound/page-notfound.component';
import { ShowCalendarComponent } from './components/shared/show-calendar/show-calendar.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'professors', component: ProfessorsListComponent },
  { path: 'full-calendar', component: ShowCalendarComponent },
  { path: 'pagenotfound', component: PageNotfoundComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
