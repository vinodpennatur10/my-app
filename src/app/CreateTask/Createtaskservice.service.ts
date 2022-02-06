import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Createtaskservice {

constructor(private http: HttpClient) { }
rootURL = 'assets/Proxy.conf.json';

createtask(Name: string, assigntouser:string,details: string) {
  //const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json' })};

  var data = {Name:name, Assigntouser:assigntouser,Details:details };
    return this.http.post('/createtask', data);
  }
 

}