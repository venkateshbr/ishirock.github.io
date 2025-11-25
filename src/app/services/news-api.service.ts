import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // NewsData.io API key (replace with your own from https://newsdata.io)
  api_key = 'pub_6c71f9c4784a4c818e1225e7270eb3a7';

  constructor(private http: HttpClient) { }

  // NewsData.io endpoint
  newsURL = "https://newsdata.io/api/1/news";

  // Get top headlines (default: US)
  newsArticles(): Observable<any> {
    const url = `${this.newsURL}?country=us&apikey=${this.api_key}`;
    return this.http.get(url);
  }

  // Get articles by category
  getArticleByCategory(category: string): Observable<any> {
    const url = `${this.newsURL}?country=us&category=${category}&apikey=${this.api_key}`;
    console.log(url);
    return this.http.get(url);
  }
}
