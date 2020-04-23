import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { timer } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  stratTime: number = 0;
  interval: number = 10000;
  newsList: [];

  constructor(private newsSer: NewsService) { }

  ngOnInit(): void {
    this.fetchlatestNews();
  }

  fetchlatestNews() { 
    timer(this.stratTime, this.interval).pipe(concatMap(() =>
      this.newsSer.getLatestNews())).subscribe(res => {
        this.newsList = res['articles'];
      });
  }

  transform(publishDate) {
    return new Date(publishDate).toLocaleString();
  }

}
