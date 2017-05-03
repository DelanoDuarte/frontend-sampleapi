import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';


import { Evento } from 'app/evento/model/Evento';
import { EventoService } from 'app/evento/service/evento.service';


@Component({
  selector: 'app-find-evento',
  templateUrl: './find-evento.component.html',
  styleUrls: ['./find-evento.component.css'],
  providers: [EventoService]
})
export class FindEventoComponent implements OnInit {

  public evento: Evento = new Evento;

  constructor(private eventoService: EventoService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.getEvento();
  }

  getEvento() {
    let idEvento = this.routes.params.subscribe(params => {
      let id = +params['id'];
    });

    console.log(idEvento);
    this.eventoService.findEvento(idEvento).subscribe(evento => this.evento = evento);
    console.log(this.evento);
  }

}
