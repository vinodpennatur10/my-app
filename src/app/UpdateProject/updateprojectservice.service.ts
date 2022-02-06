import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class updateprojectservice {

constructor(private http: HttpClient) { }
rootURL = 'assets/Proxy.conf.json';

updateproject(Name: string, details: string) {
  //const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json' })};

  var data = {Name:name, Details:details };
    return this.http.post('/updateproject', data);
  }
 
  deleteproject(Name: string) {
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json' })};
  
    var data = {Name:Name };
      return this.http.post('/deleteproject', data);
    }

}