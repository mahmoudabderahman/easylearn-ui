import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherComponent} from './components/teacher/teacher-list/teacher.component';
import {ParentComponent} from './components/parent/parent-list/parent.component';
import {StudentComponent} from './components/student/student-list/student.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import {CourseComponent} from './components/course/course-list/course.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserComponent } from './components/user/user.component';
import {RouteGuardService} from './route-guard.service';
import {StudentUpdateComponent} from './components/student/student-update/student-update.component';
import {StudentCreateComponent} from './components/student/student-create/student-create.component';
import {ErrorComponent} from './components/error/error.component';
import {LogoutComponent} from './components/logout/logout.component';
import {TeacherCreateComponent} from './components/teacher/teacher-create/teacher-create.component';
import {TeacherUpdateComponent} from './components/teacher/teacher-update/teacher-update.component';
import {ParentCreateComponent} from './components/parent/parent-create/parent-create.component';
import {ParentUpdateComponent} from './components/parent/parent-update/parent-update.component';
import {CourseCreateComponent} from './components/course/course-create/course-create.component';
import {CourseUpdateComponent} from './components/course/course-update/course-update.component';
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
    path: 'teachers/create',
    component: TeacherCreateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'teachers/:id',
    component: TeacherUpdateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'parents',
    component: ParentComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'parents/create',
    component: ParentCreateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'parents/:id',
    component: ParentUpdateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'students',
    component: StudentComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'students/create',
    component: StudentCreateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'students/:id',
    component: StudentUpdateComponent, canActivate: [RouteGuardService]
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
    path: 'courses/create',
    component: CourseCreateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'courses/:id',
    component: CourseUpdateComponent, canActivate: [RouteGuardService]
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
  {
    path: 'logout',
    component: LogoutComponent , canActivate: [RouteGuardService]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
