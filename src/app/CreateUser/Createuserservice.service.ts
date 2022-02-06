import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Createuserservice {

constructor(private http: HttpClient) { }
rootURL = 'assets/Proxy.conf.json';

createuser(firstname: string, email: string, lastname: string) {
  //const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json' })};

  var data = {Firstname:firstname, Email:email,astname:lastname };
    return this.http.post('/createuser', data);
  }
 
 
}