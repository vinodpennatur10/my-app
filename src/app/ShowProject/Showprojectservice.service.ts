import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class showprojectservice {

constructor(private http: HttpClient) { }
rootURL = 'assets/Proxy.conf.json';

getProjectDetails() {
    return this.http.get(this.rootURL + '/projectDetails');
  }
 

}