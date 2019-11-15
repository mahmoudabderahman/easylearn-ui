import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EasylearnService} from './services/easylearn.service';
import { TeacherComponent } from './components/teacher/teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EasylearnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
