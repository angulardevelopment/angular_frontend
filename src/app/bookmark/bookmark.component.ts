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

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  getItem() {

  }

  listClick(event, newValue) {
    console.log(newValue);
    this.selectedIndex = newValue;
  }
}
