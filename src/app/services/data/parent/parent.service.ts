import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parent} from '../../../components/parent/parent-list/parent.component';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  getParents() {
    return this.http.get<Parent[]>('/server/api/v1/parents');
  }

  deleteParent(id) {
    return this.http.delete(`/server/api/v1/parents/${id}`);
  }

  getParent(id) {
    return this.http.get<Parent>(`/server/api/v1/parents/${id}`);

  }

  createParent(parent) {
    return this.http.post(`/server/api/v1/parents`, parent);
  }

  updateParent(id: number, parent: Parent) {
    return this.http.put(`/server/api/v1/parents/${id}`, parent);
  }

  assignStudentsToParent(id: number, studentIds: []) {
    return this.http.post(`/server/api/v1/parents/${id}/students`, studentIds)
  }
}
