import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Instrument {
  model: string;
  brand: string;
}

@Injectable({
  providedIn: 'root'
})

export class InstrumentsService {

  endpoint = 'http://localhost:8080/instruments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createInstrument(instrument: Instrument): Observable<any> {
    return this.httpClient.post<Instrument>(this.endpoint, JSON.stringify(instrument), this.httpOptions)
  }

  getInstrument(id): Observable<Instrument[]> {
    return this.httpClient.get<Instrument[]>(this.endpoint + '/' + id)
  }

  getAllInstruments() {
    return this.httpClient.get(this.endpoint);
  }

  updateInstrument(id, instrument: Instrument): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(instrument))
  }

  deleteInstrument(id): Observable<Instrument[]> {
    return this.httpClient.delete<Instrument[]>(this.endpoint + '/' + id)
  }
}
