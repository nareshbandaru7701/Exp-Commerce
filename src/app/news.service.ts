import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl = `${'https://newsapi.org/v2/everything?q=bitcoin&from=2020-04-15&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98'}`;

  constructor(private http: HttpClient) { }

  getLatestNews() {
    return this.http.get(this.newsUrl);
  }
}
