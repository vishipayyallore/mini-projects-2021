import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';



@NgModule({
  declarations: [
    TopNavbarComponent,
    FooterComponent,
    NotificationsButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
