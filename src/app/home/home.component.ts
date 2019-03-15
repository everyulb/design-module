import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sideNavItems = [{
    name: 'Planning',
    iconUrl: ''
  },{
    name: 'Planning',
    iconUrl: ''
  },{
    name: 'Planning',
    iconUrl: ''
  },{
    name: 'Planning',
    iconUrl: ''
  },{
    name: 'Planning',
    iconUrl: ''
  }]

  createOptions = [{
      name: 'Solid Waste Management'
    },
    {
      name: 'Liquid Waste Management'
    },
    {
      name: 'River Restoration'
  }]

  constructor() { }

  ngOnInit() {
  }

}
