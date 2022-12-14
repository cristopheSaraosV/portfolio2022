import { Component, OnInit } from '@angular/core';
import { OptionsMenu } from '../../interfaces/optionsMenu.interface';

@Component({
  selector: 'app-homePage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  optionsMenu!: OptionsMenu[];

  ngOnInit(): void {
    this.optionsMenu= [
      {
        name:"Home",
        route:"/home"
      },
      {
        name:"Projects",
        route:"/projects"
      },
      {
        name:"Contact",
        route:"/contact"
      }
  ];
  }

}
