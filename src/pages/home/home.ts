import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../app/interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private dataURL: string = "https://www.techiediaries.com/api/data.json";
  items: Array<Item>;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.http.get(this.dataURL).subscribe((data: Array<Item>) => {
      console.log(data);
      this.items = data;
    }, (err) => {
      console.log(err);
    }

    );
  }

}
