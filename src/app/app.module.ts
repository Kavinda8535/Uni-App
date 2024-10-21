import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Services

const appRoutes: Routes = [{ path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) },
{ path: 'professors', loadChildren: () => import('./professors/professors.module').then(m => m.ProfessorsModule) },
{ path: 'subjects', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) },
{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }