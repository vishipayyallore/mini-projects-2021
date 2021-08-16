import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { ContactusComponent } from './components/home/contactus/contactus.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { PageNotfoundComponent } from './components/shared/page-notfound/page-notfound.component';
import { ListBooksComponent } from './components/books/list-books/list-books.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { DeleteBookComponent } from './components/books/delete-book/delete-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'list-books', component: ListBooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book', component: EditBookComponent },
  { path: 'delete-book', component: DeleteBookComponent },
  { path: 'pagenotfound', component: PageNotfoundComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
