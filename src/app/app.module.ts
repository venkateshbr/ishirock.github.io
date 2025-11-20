import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NewsApiService} from './services/news-api.service';
import { PhotoDialog, PhotosComponent } from './photos/photos.component';
import { NewsComponent } from './news/news.component';
import { SafeHtmlPipe } from './news/SafeHtmlPipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    NewsComponent,
    SafeHtmlPipe,
    PhotoDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    NewsApiService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

