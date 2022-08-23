import { Component, OnInit } from '@angular/core';
import { OptionsMenu } from '../../interfaces/optionsMenu.interface';

@Component({
  selector: 'app-contactPage',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
