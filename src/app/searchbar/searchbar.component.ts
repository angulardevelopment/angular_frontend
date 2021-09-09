import { ApiService } from './../services/api.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  updatedURL = '';
  constructor(public data: DataService, public api: ApiService) { }

  ngOnInit(): void {
  }

  playVideo() {
    this.data.youtubeURL.next(this.updatedURL);
  }

  updateBookmark() {
    if (this.updatedURL) {



      let formData: FormData = new FormData();
      formData.append('bookmark_url', this.updatedURL);

      this.api.postService('bookmark/add/', formData).subscribe((data) => {

        alert('Bookmark added');

      });
    }
  }
}
