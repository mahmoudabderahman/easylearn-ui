/**
 * @Author: Mahmoud Abdelrahman
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeacherComponent} from './components/teacher/teacher-list/teacher.component';
import {ParentComponent} from './components/parent/parent-list/parent.component';
import {StudentComponent} from './components/student/student-list/student.component';
import {CourseComponent} from './components/course/course-list/course.component';
import {AppointmentComponent} from './components/appointment/appointment-list/appointment.component';
import {LoginComponent} from './components/login/login.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorComponent} from './components/error/error.component';
import {MenuComponent} from './components/menu/menu.component';
import {StudentUpdateComponent} from './components/student/student-update/student-update.component';
import {StudentCreateComponent} from './components/student/student-create/student-create.component';
import {LogoutComponent} from './components/logout/logout.component';
import {FooterComponent} from './components/footer/footer.component';
import {TeacherCreateComponent} from './components/teacher/teacher-create/teacher-create.component';
import {TeacherUpdateComponent} from './components/teacher/teacher-update/teacher-update.component';
import {ParentUpdateComponent} from './components/parent/parent-update/parent-update.component';
import {ParentCreateComponent} from './components/parent/parent-create/parent-create.component';
import {CourseCreateComponent} from './components/course/course-create/course-create.component';
import {CourseUpdateComponent} from './components/course/course-update/course-update.component';
import {AppointmentCreateComponent} from './components/appointment/appointment-create/appointment-create.component';
import {AppointmentUpdateComponent} from './components/appointment/appointment-update/appointment-update.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AssignAppointmentsToCourseComponent} from './components/course/assign-appointments-to-course/assign-appointments-to-course.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {MatConfirmDialogComponent} from './components/util/mat-confirm-dialog/mat-confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIcon} from '@angular/material/icon';
import {AssignStudentsToAppointmentComponent} from './components/appointment/assign-students-to-appointment/assign-students-to-appointment.component';
import {AssignStudentsToCourseComponent} from './components/course/assign-students-to-course/assign-students-to-course.component';
import {AssignStudentsToParentComponent} from './components/parent/assign-students-to-parent/assign-students-to-parent.component';
import {AssignCoursesToTeacherComponent} from './components/teacher/assign-teacher-to-course/assign-courses-to-teacher.component';
import {ParentProfileComponent} from './components/profiles/parent-profile/parent-profile.component';
import {TeacherProfileComponent} from './components/profiles/teacher-profile/teacher-profile.component';
import {StudentProfileComponent} from './components/profiles/student-profile/student-profile.component';
import {authInterceptorProviders} from './services/BasicAuthHtppInterceptorService';
// tslint:disable-next-line:max-line-length
import {FindAppointmentsOfAStudentCoursesComponent} from './components/profiles/students/find-appointments-of-astudent-courses/find-appointments-of-astudent-courses.component';
import {FindCoursesOfStudentComponent} from './components/profiles/students/find-courses-of-student/find-courses-of-student.component';
import {GetCoursesOfTeacherComponent} from './components/profiles/teachers/get-courses-of-teacher/get-courses-of-teacher.component';
import {FillAttendanceListComponent} from './components/profiles/teachers/fill-attendance-list/fill-attendance-list.component';
// tslint:disable-next-line:max-line-length
import {GetCoursesOfParentsStudentsComponent} from './components/profiles/parents/get-courses-of-parents-students/get-courses-of-parents-students.component';
import {GetChilderenOfParentComponent} from './components/profiles/parents/get-childeren-of-parent/get-childeren-of-parent.component';
import {GetAppointmentsOfParentStudentsComponent} from './components/profiles/parents/get-appointments-of-parent-students/get-appointments-of-parent-students.component';
import {DocumentComponent} from './components/document/document.component';
import {GetStudentsInCourseComponent} from './components/profiles/teachers/get-students-in-course/get-students-in-course.component';
import { EvaluateStudentComponent } from './components/profiles/teachers/evaluate-student/evaluate-student.component';
import { GetEvaluationOfChildComponent } from './components/profiles/parents/get-evaluation-of-child/get-evaluation-of-child.component';
import { DownloadDocumentComponent } from './components/profiles/students/download-document/download-document.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ParentComponent,
    StudentComponent,
    CourseComponent,
    AppointmentComponent,
    LoginComponent,
    AdminPageComponent,
    ErrorComponent,
    MenuComponent,
    StudentUpdateComponent,
    StudentCreateComponent,
    LogoutComponent,
    FooterComponent,
    TeacherCreateComponent,
    TeacherUpdateComponent,
    ParentUpdateComponent,
    ParentCreateComponent,
    CourseCreateComponent,
    CourseUpdateComponent,
    AppointmentCreateComponent,
    AppointmentUpdateComponent,
    WelcomeComponent,
    AssignAppointmentsToCourseComponent,
    MatConfirmDialogComponent,
    MatIcon,
    AssignStudentsToAppointmentComponent,
    AssignStudentsToCourseComponent,
    AssignStudentsToParentComponent,
    AssignCoursesToTeacherComponent,
    ParentProfileComponent,
    TeacherProfileComponent,
    StudentProfileComponent,
    FindAppointmentsOfAStudentCoursesComponent,
    FindCoursesOfStudentComponent,
    GetCoursesOfTeacherComponent,
    FillAttendanceListComponent,
    GetCoursesOfParentsStudentsComponent,
    GetChilderenOfParentComponent,
    GetAppointmentsOfParentStudentsComponent,
    DocumentComponent,
    GetStudentsInCourseComponent,
    EvaluateStudentComponent,
    GetEvaluationOfChildComponent,
    DownloadDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule {

}
