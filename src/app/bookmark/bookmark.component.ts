import { Subscription } from 'rxjs';
import { Bookmark } from '../models/bookmark';
import { ApiService } from './../services/api.service';
import { DataService } from './../services/data.service';
import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
declare var bootstrap: any; // For Bootstrap 5

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
  standalone: false
})
export class BookmarkComponent implements OnInit {
  bookmarkList = [];
  selectedIndex;
  selectedBookmark: Bookmark | null = null;
  private subscriptions: Subscription[] = [];

  constructor(public data: DataService, public api: ApiService) { }

  ngOnInit(): void {
      this.subscriptions.push(this.data.bookMarkUpdate.subscribe((data) => {
      if (data) {
         this.getBookmarkList();
      }
    }));
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


@ViewChild('linkInput') linkInput!: ElementRef<HTMLInputElement>;

  openShareModal(bookmark) {
        this.selectedBookmark = bookmark;
    const shareModal = new bootstrap.Modal(document.getElementById('shareModal'));
    shareModal.show();
  }

  copyLink() {
     const inputElement = this.linkInput.nativeElement;
  inputElement.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
  }

}
