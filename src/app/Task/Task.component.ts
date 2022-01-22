import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
@Component({
  selector: 'app-root',
  templateUrl: './Task.component.html',
  styleUrls: ['./Task.component.css']
})
export class TaskComponent {
  title = 'my-app';

  columnDefs = [
    {headerName: 'ID', field: 'ID'},
    {headerName: 'ProjectID', field: 'ProjectID'},
    {headerName: 'Status', field: 'Status'},
    {headerName: 'AssignedToUserID', field: 'AssignedToUserID'},
    {headerName: 'Detail', field: 'Detail'},
    {headerName: 'CreatedOn', field: 'CreatedOn'}
];

rowData = [ {ID: '1', ProjectID: '1', Status: '2', AssignedToUserID:'1',Detail:'This is test Task', CreateOn: '20220122'},
  {ID: '1', ProjectID: '1', Status: '2', AssignedToUserID:'1',Detail:'This is test Task', CreateOn: '20220122'},
  {ID: '2', ProjectID: '2', Status: '1', AssignedToUserID:'2',Detail:'This is test Task', CreateOn: '20220122'},
  {ID: '3', ProjectID: '3', Status: '2', AssignedToUserID:'3',Detail:'This is test Task', CreateOn: '20220122'},
 
 
];
}
