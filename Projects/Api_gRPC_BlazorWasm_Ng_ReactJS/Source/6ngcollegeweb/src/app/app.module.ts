import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/shared/top-navbar/top-navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EmployeesCardsComponent } from './components/employees/employees-cards/employees-cards.component';
import { DashboardComponent } from './components/Home/dashboard/dashboard.component';
import { EmployeesTableComponent } from './components/employees/employees-table/employees-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    EmployeesTableComponent,
    EmployeesCardsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
