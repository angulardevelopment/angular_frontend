import { ApiService } from './../services/api.service';
import { DataService } from './../services/data.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: false
})
export class HistoryComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  historyList = [];
  selectedIndex;
  bookmarkedIndices = new Set<number>();

  constructor(public data: DataService, public api: ApiService, public changeDetector: ChangeDetectorRef) {
    this.subscriptions.push(this.data.youtubeURL.subscribe((data) => {

      if (data) {
        this.updateHistoyList(data);
      }

    }));
  }

  updateHistoyList(data) {
    const index = this.historyList.findIndex(comment => comment.fields.history_url === data);

    if (index === -1) {
      this.historyList.push({ 'fields': { history_url: data } });
      this.updateData(data);
    }

  }

  updateData(url) {


    let formData: FormData = new FormData();
    formData.append('history_url', url);

    this.api.postService('', formData).subscribe((data) => {
      console.log('history updated');


    });
  }

  updateBookmark(i: number) {


    let formData: FormData = new FormData();
    formData.append('bookmark_url', this.historyList[i].fields.history_url);

    this.api.postService('bookmark/add/', formData).subscribe((data) => {
    this.data.bookMarkUpdate.next('Bookmark added');
      this.changeDetector.detectChanges();
      console.log('Bookmark added');

    });
  //     if (this.bookmarkedIndices.has(i)) {
  //   this.bookmarkedIndices.delete(i);
  // } else {
  //   this.bookmarkedIndices.add(i);
  // }
  }

isBookmarked(i: number): boolean {
  return this.bookmarkedIndices.has(i);
}

  playVideo(i) {
    this.data.youtubeURL.next(this.historyList[i].fields.history_url);

  }
  listClick(event, newValue) {

    this.selectedIndex = newValue;
  }
  ngOnInit(): void {
    this.getHistory();

  }
  ngOnDestroy() {

    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getHistory() {
    this.api.getService('history/list/').subscribe((data) => {

      this.historyList = data;
    });
  }

}
