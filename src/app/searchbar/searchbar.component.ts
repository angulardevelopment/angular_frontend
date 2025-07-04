import { ApiService } from './../services/api.service';
import { DataService } from './../services/data.service';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: false
})
export class SearchbarComponent implements OnInit {
  // updatedURL = '';
  constructor(public data: DataService, public api: ApiService) { }

  ngOnInit(): void {
  }

    value = signal('');

  onInput(newValue: string) {
    this.value.set(newValue);
  }
  
  playVideo() {
    this.data.youtubeURL.next(this.value());
  }

  updateBookmark() {
    if (this.value()) {



      let formData: FormData = new FormData();
      formData.append('bookmark_url', this.value());

      this.api.postService('bookmark/add/', formData).subscribe((data) => {

        alert('Bookmark added');

      });
    }
  }
}
