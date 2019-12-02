import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {



  quotes:Quote [] = [
  new Quote(1, 'Vladimir', 'It was love at first sight, at last sight, at ever and ever sight.',new Date(2020,3,14)),
  new Quote(2, 'Kamala', 'Na iwake ...wollan ...wollaan',new Date(2020,3,14)),

  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  deletedQuote(voteQuotes, index){
    if (voteQuotes) {
      const toDelete = confirm(`Delete ${this.quotes[index].author} ?`)
    // this.goals.splice(index,1);

    if (toDelete){
      this.quotes.splice(index,1)
    }
    }
  }
  constructor() {}
  ngOnInit() {
  }

}
