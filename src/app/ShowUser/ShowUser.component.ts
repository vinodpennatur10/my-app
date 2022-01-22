import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
//import { markAsUntransferable } from 'worker_threads';
import {user} from '../model/User.model'
@Component({
  selector: 'app-root',
  templateUrl: './ShowUser.component.html',
  styleUrls: ['./ShowUser.component.css']
})
export class ShowUserComponent {
  title = 'my-app';


  rowDataList: user[]= [  
    new user ('1',  'Mark',  'Seeman',   'Mark.seeman@test.com',  'Password1'),
    new user ('2',  'John',  'Skeet',   'john.Skeet@test.com',  'Password1'),
    new user ('3',  'Bob',  'Martin',   'Bob.Martin@test.com',  'Password1')
   
   ];  

  columnDefs = [
    {headerName: 'ID', field: 'ID'},
    {headerName: 'FirstName', field: 'FirstName'},
    {headerName: 'LastName', field: 'LastName'},
    {headerName: 'Email', field: 'Email'},
    {headerName: 'Password', field: 'Password'}
];


// rowData = [
//   {ID: '1', FirstName: 'Mark', LastName: 'Seeman',  Email: 'Mark.seeman@test.com', Password: 'Password1'},
//   {ID: '2', FirstName: 'John', LastName: 'Skeet',  Email: 'john.Skeet@test.com', Password: 'Password1'},
//   {ID: '3', FirstName: 'Bob', LastName: 'Martin',  Email: 'Bob.Martin@test.com', Password: 'Password1'},
// ];

rowData= this.rowDataList;
// rowData =  [  
//   new user ('1',  'Mark',  'Seeman',   'Mark.seeman@test.com',  'Password1'),
//   new user ('2',  'John',  'Skeet',   'john.Skeet@test.com',  'Password1'),
//   new user ('3',  'Bob',  'Martin',   'Bob.Martin@test.com',  'Password1')
 
//  ];  
}
