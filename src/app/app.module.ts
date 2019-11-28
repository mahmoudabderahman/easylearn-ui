import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EasylearnService} from './services/data/easylearn.service';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ParentComponent } from './components/parent/parent.component';
import { StudentComponent } from './components/student/student-list/student.component';
import { CourseComponent } from './components/course/course.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EasylearnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
