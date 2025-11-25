import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NewsApiService } from './services/news-api.service';
import { PhotoDialog, PhotosComponent } from './photos/photos.component';
import { NewsComponent } from './news/news.component';
import { SafeHtmlPipe } from './news/SafeHtmlPipe';
import { MatDialogModule } from '@angular/material/dialog';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    NewsComponent,
    SafeHtmlPipe,
    PhotoDialog,
    CvComponent
  ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule], providers: [NewsApiService, provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }

