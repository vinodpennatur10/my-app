import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class showUserservice {

constructor(private http: HttpClient) { }
rootURL = 'assets/Proxy.conf.json';

getUserDetails() {
    return this.http.get(this.rootURL + '/UserDetails');
  }
 

}