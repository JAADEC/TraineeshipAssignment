import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { IJob } from './models/job.model';
import { JobService } from './services/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  datasource = new MatTableDataSource<IJob>();

  constructor (
    private jobService: JobService
  ) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(result => {
      this.datasource.data = result
    })
    
  }

  title = 'TraineeshipAssignment';
}
