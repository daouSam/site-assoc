import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatapageService {

  constructor() { }

  data = new Datap()

  get myProperty(): Datap {
    return this.data;
  }
  
  set myProperty(value: Datap) {
    this.data = value;
  }
}

class Datap {
  private titre?: string
  private url1?: string
  private url2?: string
}

