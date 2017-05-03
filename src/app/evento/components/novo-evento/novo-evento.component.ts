import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Evento } from 'app/evento/model/Evento';
import { EventoService } from 'app/evento/service/evento.service';

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: ['./novo-evento.component.css'],
  providers: [EventoService]
})
export class NovoEventoComponent implements OnChanges {

  public evento: Evento = new Evento;

  constructor(private eventoService: EventoService, private router: Router) { }

  ngOnChanges() {
    this.saveEvento();
  }

  saveEvento() {
    try {
      this.evento.dataEvento = new Date();
      this.eventoService.saveEvento(this.evento).subscribe();
    } catch (error) {
      console.log(error);
    } finally {
      this.router.navigateByUrl("/eventos");
    }

  }


}
