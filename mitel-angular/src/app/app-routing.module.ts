import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/authGaurd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  
  {
    path: "dashboard", component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [{
      path: "projects",
     
      component: ProjectsComponent,
      //example locahost:4200/dashboard/projects/1
      children:[{
        path:":id",
        component:ProjectDetailsComponent
      }]
    },
     //example locahost:4200/dashboard/reports
    {
      path: "reports",
      component: ReportsComponent
    },
     //example locahost:4200/dashboard/projects/1
    {
      path: "locations",
      component: LocationsComponent
    },

    ]
  },
  {
    path: "**", component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
