import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class showTaskservice {

constructor(private http: HttpClient) { }
rootURL = 'assets/Proxy.conf.json';

getTaskDetails() {
    return this.http.get(this.rootURL + '/TaskDetails');
  }
 

}