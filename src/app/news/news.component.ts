import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  standalone: false
})
export class NewsComponent implements OnInit {


  mArticles: Array<any>;
  mSources: Array<any>;
  bArticles: Array<any>;
  bCategories: Array<any>;

  constructor(private newsapi: NewsApiService) {
  }

  ngOnInit() {

    // Load default news articles
    this.newsapi.newsArticles().subscribe((result) => {
      console.log('Full API Result:', result);
      this.bArticles = result['articles'];
      console.log('Articles:', this.bArticles);
    })

    // NewsAPI.org supported categories
    this.bCategories = [
      {
        "id": "business",
        "category": "Business",
      },
      {
        "id": "technology",
        "category": "Technology",
      },
      {
        "id": "sports",
        "category": "Sports",
      },
      {
        "id": "entertainment",
        "category": "Entertainment",
      },
      {
        "id": "science",
        "category": "Science",
      },
      {
        "id": "health",
        "category": "Health",
      },
    ]

  }

  searchArticles(category) {
    console.log("selected category is: " + category);
    this.newsapi.getArticleByCategory(category).subscribe((result) => {
      this.bArticles = result['articles']; // NewsAPI.org uses 'articles' field
      console.log(this.bArticles);
    })
  }

}
