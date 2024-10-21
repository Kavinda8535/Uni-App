import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorsComponent } from './professors.component';


const routes: Routes = [
  { path: '', component: ProfessorsComponent }
];

@NgModule({
  declarations: [
    ProfessorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfessorsModule { }
