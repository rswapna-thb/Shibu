import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeEntryScreenComponent} from './employee-entry-screen/employee-entry-screen.component'

const routes: Routes = [
  {path: 'employee-entry-screen', component: EmployeeEntryScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
