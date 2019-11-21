import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherComponent} from './components/teacher/teacher.component';
import {ParentComponent} from './components/parent/parent.component';
import {StudentComponent} from './components/student/student.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import {CourseComponent} from './components/course/course.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserComponent } from './components/user/user.component';


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
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin-page',
    component: AdminPageComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
