import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { Project } from '../model/Project.model ';

@Component({
  selector: 'app-root',
  templateUrl: './ShowProject.component.html',
  styleUrls: ['./ShowProject.component.css']
})
export class ShowProjectComponent {
  columnDefs = [
    {headerName: 'ID', field: 'ID'},
    {headerName: 'Name', field: 'Name'},
    {headerName: 'Details', field: 'Details'},
    {headerName: 'CreatedOn', field: 'CreatedOn'}
   
];


rowDataList: Project[]= [  
  new Project ('1',  'TestProject1', 'This is Test Project', '20220122'),
  new Project ('2',  'TestProject2', 'This is Test Project', '20220122'),
 ];

 rowData =this.rowDataList;
// rowData = [
//   {ID: '1', Name: 'TestProject1', Details: 'This is TestProject',  CreateOn: '20220122'},
//   {ID: '2', Name: 'TestProject2', Details: 'This is TestProject',  CreateOn: '20220122'},
//   {ID: '3', Name: 'TestProject3', Details: 'This is TestProject',  CreateOn: '20220122'},
 
// ];
}
