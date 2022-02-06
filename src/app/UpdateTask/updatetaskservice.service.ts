import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class updatetaskservice {

constructor(private http: HttpClient) { }
rootURL = 'assets/Proxy.conf.json';

updatetask(Name: string, assigntouser:string,details: string) {
  //const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json' })};

  var data = {Name:name, Assigntouser:assigntouser,Details:details };
    return this.http.post('/updatetask', data);
  }
 

  deletetask(Name: string) {
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json' })};
  
    var data = {Name:Name };
      return this.http.post('/deletetask', data);
    }

}