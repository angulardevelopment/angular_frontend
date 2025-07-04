import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { historyList } from '../mock-data/history-list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Add History	POST	        http://127.0.0.1:8000/

  // List of history	GET	        http://127.0.0.1:8000/history/list/

  // Add bookmark	POST	        http://127.0.0.1:8000/bookmark/add/

  // List of bookmarks	GET	        http://127.0.0.1:8000/bookmark/list/
  constructor(private http?: HttpClient) { }

  getService(url: string) {


    return this.http.get<any>(environment.baseUrl + url).pipe(map(res => {
      return res;
    })
    );
    // if(url === 'history/list/') {
    // return of(historyList);
    // } else if(url === 'bookmark/list/') {
    //   return of(historyList);
    // }
  }

  postService(url: string, data: any) {


    return this.http.post<any>(environment.baseUrl + url, data).pipe(
      map(res => {
        return res;
      })
    );
  //  return of({ success: true });
  }
}
