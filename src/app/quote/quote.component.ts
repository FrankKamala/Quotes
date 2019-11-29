import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {



  constructor() {}
  quotes:Quote [] = [
  new Quote(1, 'Vladimir', 'It was love at first sight, at last sight, at ever and ever sight.',new Date(2020,3,14)),
  new Quote(2, 'Kamala', 'Na iwake ...wollan ...wollaan',new Date(2020,3,14)),

  ];

  ngOnInit() {
  }

}
