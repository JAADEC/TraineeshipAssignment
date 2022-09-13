import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IJob } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {


  availableColumns = ['logo','company', 'role', 'level'];
  datasource = new MatTableDataSource<IJob>();

  constructor (
    private jobService: JobService
  ) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(result => {
      console.log(result);
      this.datasource.data = result
    })
    
  }
}
