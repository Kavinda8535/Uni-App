import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorDetailComponent } from './professor-detail/professor-detail.component';

const routes: Routes = [
  { path: '', component: ProfessorListComponent },
  { path: ':id', component: ProfessorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorsRoutingModule {}