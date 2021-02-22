import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthguardService } from './authguard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'add',component:CreateEmployeeComponent},
  {path:'employee',component:EmployeeListComponent,canActivate:[AuthguardService]},
  {path:'login',component:LoginComponent},
  {path:' ',redirectTo:'employee',pathMatch:'full'},
  {path:'logout',component:LogoutComponent,canActivate:[AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
