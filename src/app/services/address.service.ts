import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = 'http://localhost:3000/';
  constructor( private http: Http) { }
  /**
   * Getting addreses from the api
   */
  getAddresses() {
    const url = `${this.baseUrl}posts`;
    return this.http.get(url);
  }
 /**
  * Adding a new address
  * @param data address data
  */
  add(adressData) {
     const url = `${this.baseUrl}add`;
     return this.http.post(url, adressData);
  }
}
