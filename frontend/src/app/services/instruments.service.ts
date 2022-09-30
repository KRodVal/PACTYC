import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instruments } from '../interfaces/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  endpoint = 'http://localhost:8080/instruments';

  constructor(private httpClient : HttpClient) { }

  getAllInstruments() {
    return this.httpClient.get(this.endpoint);
  }
}
