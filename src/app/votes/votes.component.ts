import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

 numberOfUpvote=0;
 numberOfDvote=0;
 upVotes(){
   this.numberOfUpvote++;
 }
 downVotes(){
   this.numberOfDvote++;
 }
  constructor() { }

  ngOnInit() {
  }

}
