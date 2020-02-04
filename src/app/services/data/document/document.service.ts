/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Document} from '../../../components/document/document.component';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {
  }

  createDocument(document, courseId) {
    return this.http.post(`/server/api/v1/documents/uploadFileToCourse?courseId=${courseId}`, document);
  }

  downloadDocument(fileName) {
    return this.http.get(`/server/api/v1/documents/download/${fileName}/db`, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getDocumentsOfCourse(courseId) {
    return this.http.get<Document[]>(`/server/api/v1/documents/${courseId}`);

  }

}
