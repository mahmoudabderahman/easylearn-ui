import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Result} from '../../../components/profiles/teachers/evaluate-student/evaluate-student.component';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) {
  }


  evaluateStudent(result) {
    return this.http.post(`server/api/v1/results/assignResultToStudent`, result);
  }

  getEvaluationOfStudent(studentId, courseId) {
    return this.http.get<Result>(`server/api/v1/results/${studentId}/${courseId}`);
  }
}
