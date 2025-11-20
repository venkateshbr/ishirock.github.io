import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'cb6b0ddccf424c1bae3f025d85654fb1';
  newsUrl = "https://newsapi.org/v2/top-headlines";

  constructor(private http: HttpClient) { }

  newsArticles(): Observable<any> {
    const url = `${this.newsUrl}?country=in&apiKey=${this.api_key}`;
    return this.http.get(url).pipe(
      map((response: any) => this.transformToLegacyFormat(response))
    );
  }

  getBArticleByCategory(category: string): Observable<any> {
    const categoryMap: {[key: string]: string} = {
      'Business': 'business',
      'ScienceAndTechnology': 'technology',
      'Sports': 'sports',
      'Entertainment': 'entertainment',
      'Politics': 'general'
    };

    const newsApiCategory = categoryMap[category] || 'general';
    const url = `${this.newsUrl}?country=in&category=${newsApiCategory}&apiKey=${this.api_key}`;
    console.log(url);
    return this.http.get(url).pipe(
      map((response: any) => this.transformToLegacyFormat(response))
    );
  }

  private transformToLegacyFormat(response: any): any {
    return {
      value: response.articles.map((article: any) => ({
        name: article.title,
        url: article.url,
        image: article.urlToImage ? {
          thumbnail: {
            contentUrl: article.urlToImage
          }
        } : null,
        description: article.description || article.content || '',
        provider: [{
          name: article.source.name,
          image: article.source.name ? {
            thumbnail: {
              contentUrl: `https://logo.clearbit.com/${new URL(article.url).hostname}`
            }
          } : null
        }],
        datePublished: article.publishedAt
      }))
    };
  }
}
