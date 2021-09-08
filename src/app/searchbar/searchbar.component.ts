import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
updatedURL = '';
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  playVideo(){
this.data.youtubeURL.next(this.updatedURL);
  }
}
