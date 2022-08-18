import { Component, Input, OnInit } from '@angular/core';
import { OptionsMenu } from '../../interfaces/optionsMenu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }


  @Input() title:string='Navbar';
  @Input() options:OptionsMenu[]=[
    {
      name:"Home",
      route:"home"
    }
];

  ngOnInit(): void {
  }

}
