import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient,
  ) { }

  // Gets jobs from the data file
  getJobs(): Observable<Array<IJob>> {
    return this.http.get<Array<IJob>>('assets/data.json')
  }

}
