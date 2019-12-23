import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherComponent} from './components/teacher/teacher-list/teacher.component';
import {ParentComponent} from './components/parent/parent-list/parent.component';
import {StudentComponent} from './components/student/student-list/student.component';
import {AppointmentComponent} from './components/appointment/appointment-list/appointment.component';
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
import {AppointmentCreateComponent} from './components/appointment/appointment-create/appointment-create.component';
import {AppointmentUpdateComponent} from './components/appointment/appointment-update/appointment-update.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AssignAppointmentsToCourseComponent} from "./components/course/assign-appointments-to-course/assign-appointments-to-course.component";
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
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
    path: 'teachers/edit/:id',
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
    path: 'parents/edit/:id',
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
    path: 'students/edit/:id',
    component: StudentUpdateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'appointments',
    component: AppointmentComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'appointments/create',
    component: AppointmentCreateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'appointments/edit/:id',
    component: AppointmentUpdateComponent, canActivate: [RouteGuardService]
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
    path: 'courses/edit/:id',
    component: CourseUpdateComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'courses/assignAppointmentsToCourse/:id',
    component: AssignAppointmentsToCourseComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
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
