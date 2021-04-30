import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesCardsComponent } from './components/employees/employees-cards/employees-cards.component';
import { EmployeesTableComponent } from './components/employees/employees-table/employees-table.component';
import { DashboardComponent } from './components/Home/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees-cards', component: EmployeesCardsComponent },
  { path: 'employees-table', component: EmployeesTableComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
