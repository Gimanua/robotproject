import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
  inputs:["user"]
})
export class MemberCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //console.log(this.user);
  }

}
