import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListEventosComponent } from './evento/components/list-eventos/list-eventos.component';
import { NavbarComponent } from 'app/home/components/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'eventos', component: ListEventosComponent }
];


@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    ListEventosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
