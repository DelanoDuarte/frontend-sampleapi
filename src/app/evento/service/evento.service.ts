import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class EventoService {

  public urlGetEventos = "http://localhost:8080/SampleApi/rest/api/v1/evento/eventos";

  constructor(private http: Http) { }


  public getEventos(): Observable<any> {
    return this.http.get(this.urlGetEventos).map((res: Response) => res.json());
  }

}
