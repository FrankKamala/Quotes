import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {



  quotes:Quote [] = [
  new Quote(1, 'Miguna Miguna', 'Kenya cannot thrive and prosper when thieves, looters, land grabbers and drug barons occupy public office.',new Date(2019,3,14)),
  new Quote(2, 'Rekless', 'Yesss Bana',new Date(2019,10,7)),

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
