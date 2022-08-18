import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [MenuComponent, AsideComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    AsideComponent
  ]
})
export class ComponentsModule { }
