import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {

  private syllabus: string;

  constructor(
    private http: HttpClient
  ) { }

  load(url): Promise<string> {
    if (this.syllabus) {
      return Promise.resolve(this.syllabus);
    }
    return this.http.get(`${environment.resourcePath}${url}`, { responseType: 'text' })
      .toPromise()
      .then((syllabus: string) => {
        this.syllabus = syllabus;
        return this.syllabus;
      });
  }
  
}
