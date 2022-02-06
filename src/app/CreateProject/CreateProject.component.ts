import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { Createprojectservice } from './Createprojectservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './CreateProject.component.html',
  styleUrls: ['./CreateProject.component.css']
})
export class CreateProjectComponent {
  constructor(private Createprojectservice: Createprojectservice) { }

  name:string='';
 
  details:string ='';

    result=this.Createprojectservice.createproject(this.name,this.details);


  
}
