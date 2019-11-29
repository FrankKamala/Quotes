import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Kamala',text:'Imbounce'},
    {id:2,name:'Kioko',text:'If its ment to be '},
    {id:3,name:'Moha',text:'Aki wewe'},
    {id:4,name:'Riyad',text:'Hayawi hayawi'},

    //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},


  ];

  constructor() { }

  ngOnInit() {
  }

}
