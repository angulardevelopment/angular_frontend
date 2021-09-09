import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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
  }

  postService(url: string, data: any) {


    return this.http.post<any>(environment.baseUrl + url, data).pipe(
      map(res => {
        return res;
      })
    );
  }
}
