import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeacherComponent} from './components/teacher/teacher-list/teacher.component';
import {ParentComponent} from './components/parent/parent-list/parent.component';
import {StudentComponent} from './components/student/student-list/student.component';
import {AppointmentComponent} from './components/appointment/appointment-list/appointment.component';
import {CourseComponent} from './components/course/course-list/course.component';
import {LoginComponent} from './components/login/login.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {UserComponent} from './components/user/user.component';
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
import {AssignAppointmentsToCourseComponent} from './components/course/assign-appointments-to-course/assign-appointments-to-course.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {AssignStudentsToAppointmentComponent} from './components/appointment/assign-students-to-appointment/assign-students-to-appointment.component';
import {AssignStudentsToParentComponent} from './components/parent/assign-students-to-parent/assign-students-to-parent.component';
import {AssignCoursesToTeacherComponent} from './components/teacher/assign-teacher-to-course/assign-courses-to-teacher.component';
import {AssignStudentsToCourseComponent} from './components/course/assign-students-to-course/assign-students-to-course.component';
import {TeacherProfileComponent} from './components/profiles/teacher-profile/teacher-profile.component';
import {ParentProfileComponent} from './components/profiles/parent-profile/parent-profile.component';
import {StudentProfileComponent} from './components/profiles/student-profile/student-profile.component';
import {CourseProfileComponent} from './components/profiles/course-profile/course-profile.component';
import {FindAppointmentsOfAStudentCoursesComponent} from './components/profiles/students/find-appointments-of-astudent-courses/find-appointments-of-astudent-courses.component';

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
    path: 'teachers/profile/:id',
    component: TeacherProfileComponent, canActivate: [RouteGuardService]
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
    path: 'parents/profile/:id',
    component: ParentProfileComponent, canActivate: [RouteGuardService]
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
    path: 'students/profile/:id',
    component: StudentProfileComponent, canActivate: [RouteGuardService]
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
    path: 'courses/profile/:id',
    component: CourseProfileComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'courses/assignAppointmentsToCourse/:id',
    component: AssignAppointmentsToCourseComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'courses/assignStudentsToCourse/:id',
    component: AssignStudentsToCourseComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'appointments/assignStudentsToAppointment/:id',
    component: AssignStudentsToAppointmentComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'appointments/student/:id',
    component: FindAppointmentsOfAStudentCoursesComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'parents/assignStudentsToParent/:id',
    component: AssignStudentsToParentComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'teachers/assignCoursesToTeacher/:id',
    component: AssignCoursesToTeacherComponent, canActivate: [RouteGuardService]
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
    component: LogoutComponent, canActivate: [RouteGuardService]
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
export class AppRoutingModule {

}
