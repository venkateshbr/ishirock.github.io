import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // NewsAPI.org free tier API key (replace with your own from https://newsapi.org)
  api_key = 'f1dddc9683474714b9604ee24e158184';

  constructor(private http: HttpClient) { }

  // NewsAPI.org v2 endpoint
  newsURL = "https://newsapi.org/v2/top-headlines";

  // Get top headlines (default: US, general news)
  newsArticles(): Observable<any> {
    const url = `${this.newsURL}?country=us&apiKey=${this.api_key}`;
    return this.http.get(url);
  }

  // Get articles by category
  getArticleByCategory(category: string): Observable<any> {
    const url = `${this.newsURL}?country=us&category=${category}&apiKey=${this.api_key}`;
    console.log(url);
    return this.http.get(url);
  }
}
