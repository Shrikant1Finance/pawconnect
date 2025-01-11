import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items = [
    {
      name: 'Luna',
      age: '2 years',
      breed:'Golden Retriever',
      catigorey:'Dog',
      imgurl:'pet1.avif'
    },
    {
      name: 'Oliver',
      age: '1 years',
      breed:'Persian',
      catigorey:'Cat',
      imgurl:'pet2.avif'
    },
    {
      name: 'Max',
      age: '3 years',
      breed:'Labrador',
      catigorey:'Dog',
      imgurl:'pet3.avif'
    },
    {
      name: 'Bella',
      age: '1 years',
      breed:'Golden Retriever',
      catigorey:'Dog',
      imgurl:'pet4.avif'
    },

  ];

}
