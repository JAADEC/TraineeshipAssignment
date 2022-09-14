import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import { IFilter } from 'src/app/models/filter.model';
import { IJob } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  filters: String[] = ['JavaScript'];
  availableColumns = ['logo','company', 'filters'];
  datasource: IJob[] = [];

  constructor (
    private jobService: JobService
  ) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(result => {
      this.datasource = result
    })
  }

  getFilterAttributes(element: IJob): String[] {
    return [element.role, element.level, ...element.languages, ...element.tools]
  }

  isFilter(element: IJob): Boolean {
    if (this.filters.length === 0) {
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

  addFilterAttr(filter: String): void {
    if ((filter || '').trim()) {
      this.filters.push(filter.trim());
    }
  }

  remove(filter: String): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  clear(): void {
    this.filters = [];
  }
}
