import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './components/teacher/teacher-list/teacher.component';
import { ParentComponent } from './components/parent/parent-list/parent.component';
import { StudentComponent } from './components/student/student-list/student.component';
import { CourseComponent } from './components/course/course-list/course.component';
import { AppointmentComponent } from './components/appointment/appointment-list/appointment.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeacherCreateComponent } from './components/teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './components/teacher/teacher-update/teacher-update.component';
import { ParentUpdateComponent } from './components/parent/parent-update/parent-update.component';
import { ParentCreateComponent } from './components/parent/parent-create/parent-create.component';
import { CourseCreateComponent } from './components/course/course-create/course-create.component';
import { CourseUpdateComponent } from './components/course/course-update/course-update.component';
import { AppointmentCreateComponent } from './components/appointment/appointment-create/appointment-create.component';
import { AppointmentUpdateComponent } from './components/appointment/appointment-update/appointment-update.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {EasylearnService} from './services/data/easylearn.service';
import { AssignAppointmentsToCourseComponent } from './components/course/assign-appointments-to-course/assign-appointments-to-course.component';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {MatConfirmDialogComponent} from "./components/util/mat-confirm-dialog/mat-confirm-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIcon} from "@angular/material/icon";
import { AssignStudentsToAppointmentComponent } from './components/appointment/assign-students-to-appointment/assign-students-to-appointment.component';
import { AssignStudentsToCourseComponent } from './components/course/assign-students-to-course/assign-students-to-course.component';
import { AssignStudentsToParentComponent } from './components/parent/assign-students-to-parent/assign-students-to-parent.component';
import { AssignCoursesToTeacherComponent } from './components/teacher/assign-teacher-to-course/assign-courses-to-teacher.component';
import { ParentProfileComponent } from './components/profiles/parent-profile/parent-profile.component';
import { TeacherProfileComponent } from './components/profiles/teacher-profile/teacher-profile.component';
import { StudentProfileComponent } from './components/profiles/student-profile/student-profile.component';
import { AppointmentProfileComponent } from './components/profiles/appointment-profile/appointment-profile.component';
import { CourseProfileComponent } from './components/profiles/course-profile/course-profile.component';
import {authInterceptorProviders} from "./services/BasicAuthHtppInterceptorService";

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
    UserComponent,
    ErrorComponent,
    MenuAdminComponent,
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
    AppointmentProfileComponent,
    CourseProfileComponent
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
