import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  createDocument(document) {
    return this.http.post(`/server/api/v1/documents`, document);
  }
}
