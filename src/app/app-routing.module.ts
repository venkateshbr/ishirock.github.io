import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
  { path: 'news', component: NewsComponent },
  { path: 'cv', component: CvComponent },
  { path: '', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
