import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { updatetaskservice } from './updatetaskservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './UpdateTask.component.html',
  styleUrls: ['./UpdateTask.component.css']
})
export class UpdateTaskComponent {
  title = 'my-app';

 
  constructor(private updatetaskservice: updatetaskservice) { }

  project:string='';
  assigntouser:string='';
  details:string ='';

  updatetask()
  {
    
    this.updatetaskservice.updatetask(this.project,this.assigntouser,this.details);

  }
  deletetask()
  {
    
    this.updatetaskservice.deletetask(this.project);

  }
}
