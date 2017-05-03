import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class EventoService {

  public urlGetEventos = "http://localhost:8080/SampleApi/rest/api/v1/evento/eventos";
  public urlGetOneEvento = "http://localhost:8080/SampleApi/rest/api/v1/evento/";
  public urlPostEvento = "http://localhost:8080/SampleApi/rest/api/v1/evento/create";

  constructor(private http: Http) { }


  public getEventos(): Observable<any> {
    return this.http.get(this.urlGetEventos).map((res: Response) => res.json()).
      catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public saveEvento(body: Object): Observable<any> {

    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.urlPostEvento, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  public findEvento(id): Observable<any> {
    return this.http.get(this.urlGetOneEvento + id).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
