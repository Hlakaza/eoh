import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = '/';
  constructor( private http: Http) { }
  /**
   * Getting addreses from the api
   */
  getAddresses() {
    const url = `${this.baseUrl}`;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(url, {headers: headers});
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
