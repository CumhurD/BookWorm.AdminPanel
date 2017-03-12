import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './template/sidebar.component';
import { NavbarComponent } from './template/navbar.component';
import { DashboardComponent } from './component/common/dashboard.component';
import { AuthorsComponent } from './component/author/authors.component';
import { AddAuthorComponent } from './component/author/add-author.component';
import { PageNotFoundComponent } from './component/common/page-not-found.component';

import {routes} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    AuthorsComponent,
    AddAuthorComponent,
    PageNotFoundComponent
=======

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> bd77fba161a276cbc9e02d60ad46061ff93a3613
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule,
    RouterModule.forRoot(routes)
=======
    HttpModule
>>>>>>> bd77fba161a276cbc9e02d60ad46061ff93a3613
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
