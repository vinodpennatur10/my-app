import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { updateprojectservice } from './updateprojectservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './UpdateProject.component.html',
  styleUrls: ['./UpdateProject.component.css']
})
export class UpdateProjectComponent {
 

  constructor(private updateprojectservice: updateprojectservice) { }

  name:string='';
 
  details:string ='';

  updateproject()
  {

    this.updateprojectservice.updateproject(this.name,this.details);
  }
  deleteproject()
  {
    this.updateprojectservice.deleteproject(this.name);
  }

}
