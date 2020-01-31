import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Appointment} from '../../../components/appointment/appointment-list/appointment.component';
import {Observable} from "rxjs";
import {TokenStorageService} from "../../tokenStorageService";
const API_URL = '/server/api/v1/appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  getAppointmentsAllocatedByCourse() : Observable<any> {
    let token = this.tokenStorageService.getToken();
    const headers = new HttpHeaders({Authorization: 'Bearer ' + token});
    return this.http.get<Appointment[]>(API_URL + '?ideal=true', {headers});
  }

  getAppointments() : Observable<any> {
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

  assignStudentsToAppointment(id: number, studentIds: []) {
    return this.http.post(`/server/api/v1/appointments/${id}/students`, studentIds)
  }
}
