import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import {Task} from '../model/Task.model '

@Component({
  selector: 'app-root',
  templateUrl: './ShowTask.component.html',
  styleUrls: ['./ShowTask.component.css']
})
export class ShowTaskComponent {
  title = 'my-app';

  
  rowDataList: Task[]= [  
    new Task ('1',  '1',  '2',   '1',  'This is Test Task', '20220122'),
    new Task ('1',  '1',  '2',   '1',  'This is Test Task1', '20220122'),
   ];

  columnDefs = [
    {headerName: 'ID', field: 'ID'},
    {headerName: 'ProjectID', field: 'ProjectID'},
    {headerName: 'Status', field: 'Status'},
    {headerName: 'AssignedToUserID', field: 'AssignedToUserID'},
    {headerName: 'Detail', field: 'Detail'},
    {headerName: 'CreatedOn', field: 'CreatedOn'}
];
rowData= this.rowDataList;
// rowData = [ {ID: '1', ProjectID: '1', Status: '2', AssignedToUserID:'1',Detail:'This is test Task', CreateOn: '20220122'},
//   {ID: '1', ProjectID: '1', Status: '2', AssignedToUserID:'1',Detail:'This is test Task', CreateOn: '20220122'},
//   {ID: '2', ProjectID: '2', Status: '1', AssignedToUserID:'2',Detail:'This is test Task', CreateOn: '20220122'},
//   {ID: '3', ProjectID: '3', Status: '2', AssignedToUserID:'3',Detail:'This is test Task', CreateOn: '20220122'},
 
 
// ];
}
