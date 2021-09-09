import { ApiService } from './../services/api.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.scss']
})
export class VideoviewComponent implements OnInit {


  url: SafeResourceUrl = '';
  private subscriptions: Subscription[] = [];

  constructor(public sanitizer: DomSanitizer, public data: DataService, public api: ApiService) {
    this.subscriptions.push(this.data.youtubeURL.subscribe((data) => {
      if (data) {
        this.updatedURL(data);

      }

    }));




  }

  YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  ngOnInit() {





  }

  generateUrl(url) {
    let videoID = this.YouTubeGetID(url);
    let videoURL = `https://www.youtube.com/embed/${videoID}`
    return videoURL;
  }

  updatedURL(url) {
    let finalURL = this.generateUrl(url);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(finalURL);
  }



  ngOnDestroy() {

    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
