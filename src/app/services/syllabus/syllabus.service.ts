import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

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
    return this.http.get(url, { responseType: 'text' })
      .toPromise()
      .then((syllabus: string) => {
        this.syllabus = syllabus;
        return this.syllabus;
      });
  }
  
}
