import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { Createuserservice } from './Createuserservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './CreateUser.component.html',
  styleUrls: ['./CreateUser.component.css']
})
export class CreateUserComponent {
  title = 'my-app';

  constructor(private Createuserservice: Createuserservice) { }

 firstname:string='';
 email:string='';
 lastname:string ='';

    result=this.Createuserservice.createuser(this.firstname,this.email,this.lastname);

    
}
