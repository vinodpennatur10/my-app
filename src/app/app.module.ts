import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {loginComponent} from  './login/login.component';
import {ProjectComponent} from  './Project/Project.component';
import {CreateProjectComponent} from  './CreateProject/CreateProject.component';
import {UpdateProjectComponent} from  './UpdateProject/UpdateProject.component';
import {ShowProjectComponent} from  './ShowProject/ShowProject.component';
import { FormsModule } from '@angular/forms';
import {UserComponent} from  './User/user.component';
import {CreateUserComponent} from  './CreateUser/CreateUser.component';
import {ShowUserComponent} from  './ShowUser/ShowUser.component';
import {TaskComponent} from  './Task/Task.component';
import {CreateTaskComponent} from  './CreateTask/CreateTask.component';
import {UpdateTaskComponent} from  './UpdateTask/UpdateTask.component';
import {ShowTaskComponent} from  './ShowTask/ShowTask.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  
  declarations: [
    
    AppComponent,
    loginComponent,
    ProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    ShowProjectComponent,
    UserComponent,
    TaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    CreateUserComponent,
    ShowTaskComponent,
    ShowUserComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
