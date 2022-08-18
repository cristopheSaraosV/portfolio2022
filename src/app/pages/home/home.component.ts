import { Component, OnInit } from '@angular/core';
import { OptionsMenu } from '../../interfaces/optionsMenu.interface';

@Component({
  selector: 'app-home',
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
        route:"home"
      },
      {
        name:"Projects",
        route:"Projects"
      },
      {
        name:"Contact",
        route:"contact"
      }
  ];
  }

}
