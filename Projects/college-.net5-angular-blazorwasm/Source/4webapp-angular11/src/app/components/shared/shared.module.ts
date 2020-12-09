import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    TopNavbarComponent,
    SideNavbarComponent,
    FooterComponent,
    PageNotfoundComponent,
  ],
  exports: [
    TopNavbarComponent,
    SideNavbarComponent,
    FooterComponent,
    PageNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class SharedModule { }
