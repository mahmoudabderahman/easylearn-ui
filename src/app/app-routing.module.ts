import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherComponent} from './components/teacher/teacher.component';
import {ParentComponent} from './components/parent/parent.component';
import {StudentComponent} from './components/student/student.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import {CourseComponent} from './components/course/course.component';


const routes: Routes = [
  {
    path: 'teachers',
    component: TeacherComponent
  },
  {
    path: 'parents',
    component: ParentComponent
  },
  {
    path: 'students',
    component: StudentComponent
  },
  {
    path: 'appointments',
    component: AppointmentComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
