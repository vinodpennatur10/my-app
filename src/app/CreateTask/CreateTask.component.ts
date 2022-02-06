import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { Createtaskservice } from './Createtaskservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './CreateTask.component.html',
  styleUrls: ['./CreateTask.component.css']
})
export class CreateTaskComponent {
  title = 'my-app';

  constructor(private Createtaskservice: Createtaskservice) { }

  project:string='';
  assigntouser:string='';
  details:string ='';

    result=this.Createtaskservice.createtask(this.project,this.assigntouser,this.details);

}
