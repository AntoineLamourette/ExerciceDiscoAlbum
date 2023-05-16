import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: BehaviorSubject<any> = new BehaviorSubject<any>({}) ;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAlbumsFromApi(): void
  {
    const url = "http://localhost:3000/albums";
    this.httpClient.get(url).subscribe(response => this.albums.next(response));
  }

  
}
