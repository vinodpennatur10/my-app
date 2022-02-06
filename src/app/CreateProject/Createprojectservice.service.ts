import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Createprojectservice {

constructor(private http: HttpClient) { }
rootURL = 'assets/Proxy.conf.json';

createproject(Name: string, details: string) {
  //const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json' })};

  var data = {Name:name, Details:details };
    return this.http.post('/createproject', data);
  }
 

}