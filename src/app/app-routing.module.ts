import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loginComponent} from  './login/login.component'
import {ProjectComponent} from  './Project/Project.component';
import {CreateProjectComponent} from  './CreateProject/CreateProject.component';
import {UpdateProjectComponent} from  './UpdateProject/UpdateProject.component';
import {ShowProjectComponent} from  './ShowProject/ShowProject.component';
import {UserComponent} from  './User/user.component';
import {TaskComponent} from  './Task/Task.component';
import {CreateUserComponent} from  './CreateUser/CreateUser.component';
import {ShowUserComponent} from  './ShowUser/ShowUser.component';
import {CreateTaskComponent} from  './CreateTask/CreateTask.component';
import {UpdateTaskComponent} from  './UpdateTask/UpdateTask.component';
import {ShowTaskComponent} from  './ShowTask/ShowTask.component';
const routes: Routes = [

  { path: 'login', component: loginComponent },
  { path: 'Project', component: ProjectComponent },
  { path: 'CreateProject', component: CreateProjectComponent },
  { path: 'UpdateProject', component: UpdateProjectComponent },
  { path: 'ShowProject', component: ShowProjectComponent },
  { path: 'User', component: UserComponent },
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'ShowUSer', component: ShowUserComponent },
  { path: 'Task', component: TaskComponent },
  { path: 'CreateTask', component: CreateTaskComponent },
  { path: 'UpdateTask', component: UpdateTaskComponent },
  { path: 'ShowTask', component: ShowTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);