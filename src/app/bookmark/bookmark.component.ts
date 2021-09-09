import { ApiService } from './../services/api.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  bookmarkList = [];
  selectedIndex;

  constructor(public data: DataService, public api: ApiService) { }

  ngOnInit(): void {
    this.getBookmarkList();
  }

  playVideo(i) {
    this.data.youtubeURL.next(this.bookmarkList[i].fields.bookmark_url);

  }



  listClick(event, newValue) {

    this.selectedIndex = newValue;
  }

  getBookmarkList() {
    this.api.getService('bookmark/list/').subscribe((data) => {
      this.bookmarkList = data;

    });
  }


}
