import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../../../components/course/course-list/course.component';
import {Appointment} from '../../../components/appointment/appointment-list/appointment.component';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppointments() {
    return this.http.get<Appointment[]>('/server/api/v1/appointments');
  }

  deleteAppointment(id) {
    return this.http.delete(`/server/api/v1/appointments/${id}`);
  }

  getAppointment(id) {
    return this.http.get<Appointment>(`/server/api/v1/appointments/${id}`);
  }

  createAppointment(appointment) {
    return this.http.post(`/server/api/v1/appointments`, appointment);
  }

  updateAppointment(id: number, appointment: Appointment) {
    return this.http.put(`/server/api/v1/appointments/${id}`, appointment);
  }
}
