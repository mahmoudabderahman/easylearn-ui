import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EasylearnService} from './services/easylearn.service';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ParentComponent } from './components/parent/parent.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {FormsModule} from '@angular/forms';


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
