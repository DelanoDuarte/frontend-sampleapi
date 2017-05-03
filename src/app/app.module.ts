import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListEventosComponent } from './evento/components/list-eventos/list-eventos.component';
import { NavbarComponent } from 'app/home/components/navbar/navbar.component';
import { NovoEventoComponent } from './evento/components/novo-evento/novo-evento.component';
import { FindEventoComponent } from './evento/components/find-evento/find-evento.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'eventos', component: ListEventosComponent },
  { path: 'eventos/novo', component: NovoEventoComponent },
  { path: 'eventos/:id', component: FindEventoComponent }
];


@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    ListEventosComponent,
    NovoEventoComponent,
    FindEventoComponent
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
