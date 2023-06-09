import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const url = "http://localhost:3000/albums";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public albums!: any;

  constructor(
    private http: HttpClient
  ){}


  ngOnInit(): void {
    this.http.get(url).subscribe( response => { this.albums = response});
  }

  
}
