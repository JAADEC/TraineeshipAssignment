import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import { IJob } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {

  // Variables for the filter attributes
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  // Standard filter
  filters: String[] = ['JavaScript'];

  // Loaded data via service
  datasource: IJob[] = [];

  constructor (
    private jobService: JobService
  ) {}
  
  ngOnInit() {
    this.jobService.getJobs().subscribe(result => {
      this.datasource = result
    })
  }

  // Get all the attributes which are used for filtering
  getFilterAttributes(element: IJob): String[] {
    return [element.role, element.level, ...element.languages, ...element.tools]
  }

  // Check if the job should be filtered
  isFilter(element: IJob): Boolean {
    if (this.isFilterEmpty()) {
      return true;
    }

    const filterAttr = this.getFilterAttributes(element);

    // Checks if all filters are in the filter attributes of element
    return this.filters.every(fil => {
      return filterAttr.indexOf(fil) != -1
    });
  }

  importLogo(localPath: String) {
    return 'assets/' + localPath.slice(1);
  }

  // Add a filter via the filter tool
  add(event: MatChipInputEvent): void {
    const input = event.chipInput;
    const value = event.value;

    if ((value || '').trim()) {
      this.filters.push(value.trim());
    }

    if (input) {
      input.clear();
    }
  }

  // Check if there are filters at all
  isFilterEmpty(): Boolean {
    return this.filters.length === 0;
  }

  // Add a filter attribute from job to filters
  addFilterAttr(filter: String): void {
    if ((filter || '').trim()) {
      this.filters.push(filter.trim());
    }
  }

  // Remove a filter from the filter tool
  remove(filter: String): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  // Clear all the filters
  clear(): void {
    this.filters = [];
  }
}
