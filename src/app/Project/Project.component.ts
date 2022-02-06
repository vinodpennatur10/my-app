import 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {Project} from '../model/Project.model ';
import { Projectservice } from './Projectservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './Project.component.html',
  styleUrls: ['./Project.component.css']
})
export class ProjectComponent {
  rowData:any;
  constructor(private Projectservice: Projectservice) { }
  
  columnDefs = [
    {headerName: 'ID', field: 'ID'},
    {headerName: 'Name', field: 'Name'},
    {headerName: 'Details', field: 'Details'},
    {headerName: 'CreatedOn', field: 'CreatedOn'}
   
];
  ngOnInit() {
    this.rowData=  this.Projectservice.getProjectDetails();
    
 
}
 
//rowData=this.rowData1;
// rowData = [
//   {ID: '1', Name: 'TestProject1', Details: 'This is TestProject',  CreateOn: '20220122'},
//   {ID: '2', Name: 'TestProject2', Details: 'This is TestProject',  CreateOn: '20220122'},
//   {ID: '3', Name: 'TestProject3', Details: 'This is TestProject',  CreateOn: '20220122'},
 
// ];
}
