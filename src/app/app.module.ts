import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { VisitorDetailsComponent } from './visitor-details/visitor-details.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NewsService } from './news.service';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    VisitorFormComponent,
    VisitorDetailsComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule,
  ],
  providers: [ NewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
