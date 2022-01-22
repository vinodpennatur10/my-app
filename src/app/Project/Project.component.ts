import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
@Component({
  selector: 'app-root',
  templateUrl: './Project.component.html',
  styleUrls: ['./Project.component.css']
})
export class ProjectComponent {
  columnDefs = [
    {headerName: 'ID', field: 'ID'},
    {headerName: 'Name', field: 'Name'},
    {headerName: 'Details', field: 'Details'},
    {headerName: 'CreatedOn', field: 'CreatedOn'}
   
];

rowData = [
  {ID: '1', Name: 'TestProject1', Details: 'This is TestProject',  CreateOn: '20220122'},
  {ID: '2', Name: 'TestProject2', Details: 'This is TestProject',  CreateOn: '20220122'},
  {ID: '3', Name: 'TestProject3', Details: 'This is TestProject',  CreateOn: '20220122'},
 
];
}
