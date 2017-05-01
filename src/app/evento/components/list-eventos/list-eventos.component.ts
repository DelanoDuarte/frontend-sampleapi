import { Component, OnInit } from '@angular/core';


import { Evento } from 'app/evento/model/Evento';
import { EventoService } from 'app/evento/service/evento.service';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.css'],
  providers: [EventoService]
})
export class ListEventosComponent implements OnInit {

  public eventos: Evento[];

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.listEventos();
  }

  listEventos() {
    this.eventoService.getEventos().subscribe(eventos => this.eventos = eventos);
  }

}
