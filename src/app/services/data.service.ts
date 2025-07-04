import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  youtubeURL = new BehaviorSubject<string>('');
  bookMarkUpdate = new BehaviorSubject<string>('');

  constructor() { }
}
