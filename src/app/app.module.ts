import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JobListingsComponent } from './modules/job-listings/job-listings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {ExtendedModule, FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material.module';
import { AppComponent } from './modules/app.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    FlexModule,
    FlexLayoutModule,
    ExtendedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
