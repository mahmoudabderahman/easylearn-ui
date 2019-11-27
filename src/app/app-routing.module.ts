import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherComponent} from './components/teacher/teacher.component';
import {ParentComponent} from './components/parent/parent.component';
import {StudentComponent} from './components/student/student-list/student.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import {CourseComponent} from './components/course/course.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserComponent } from './components/user/user.component';
import {RouteGuardService} from './route-guard.service';
import {MenuAdminComponent} from './components/menu-admin/menu-admin.component';
import {StudentFormComponent} from './components/student/student-form/student-form.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'teachers',
    component: TeacherComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'parents',
    component: ParentComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'students',
    component: StudentComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'students/:id',
    component: StudentFormComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'appointments',
    component: AppointmentComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'courses',
    component: CourseComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'admin',
    component: AdminPageComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'user',
    component: UserComponent, canActivate: [RouteGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
