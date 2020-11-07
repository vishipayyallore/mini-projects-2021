import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AddBookComponent } from './components/add-book/add-book.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    PageNotfoundComponent,
    FooterComponent,
    DashboardComponent,
    BooksListComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
