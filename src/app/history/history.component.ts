import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  historyList = [];
  selectedIndex;
  constructor(public data: DataService) {
    this.subscriptions.push(this.data.youtubeURL.subscribe((data) => {

      if (data) {
        this.updateHistoyList(data);
      }

    }));
  }

  updateHistoyList(data) {
    this.historyList.push(data);
  }

  playVideo(i) {
    this.data.youtubeURL.next(this.historyList[i]);

  }
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedIndex = newValue;
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {

    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
