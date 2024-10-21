import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';

const routes: Routes = [
  { path: '', component: SubjectListComponent },
  { path: ':id', component: SubjectDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule {}