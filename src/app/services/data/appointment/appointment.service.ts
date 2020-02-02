import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../../../components/appointment/appointment-list/appointment.component';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {
  }

  getAppointmentsAllocatedByCourse() {
    return this.http.get<Appointment[]>('/server/api/v1/appointments?ideal=true');
  }

  getAppointments() {
    return this.http.get<Appointment[]>('/server/api/v1/appointments');
  }

  getAppointmentsOfTeacherCourses(id) {
    return this.http.get<Appointment[]>(`/server/api/v1/appointments?teacherId=${id}`);
  }

  findAllAppointmentsOfStudentCourses(id) {
    return this.http.get<Appointment[]>(`/server/api/v1/appointments?studentId=${id}`);
  }

  findAllIdealAppointmentsOfStudent(id) {
    return this.http.get<Appointment[]>(`/server/api/v1/appointments?ideal=true&studentId=${id}`);

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
    return this.http.post(`/server/api/v1/appointments/${id}/students`, studentIds);
  }
}
