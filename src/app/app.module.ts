import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './template/sidebar.component';
import { NavbarComponent } from './template/navbar.component';
import { DashboardComponent } from './component/common/dashboard.component';
import { AuthorsComponent } from './component/author/authors.component';
import { AddAuthorComponent } from './component/author/add-author.component';
import { PageNotFoundComponent } from './component/common/page-not-found.component';

import { NotificationService } from './service/notification.service';
import { BookwormApiRequestOptions } from 'app/bookworm-api.request.options';
import { BookService } from './service/book.service';


import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    AuthorsComponent,
    AddAuthorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    NotificationService,
    BookService,
    { provide: RequestOptions, useClass: BookwormApiRequestOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
