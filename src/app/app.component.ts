import { ApiService } from './services/api.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vid-player';
  selectedPage = 'history';
  constructor(public api: ApiService) { }
  bookmarkListLength = 0;
  ngOnInit(): void {
    this.getBookmarkList();
  }
  getBookmarkList() {
    this.api.getService('bookmark/list/').subscribe((data) => {
      this.bookmarkListLength = data.length;

    });
  }

}
