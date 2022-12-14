import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AsideComponent } from './aside/aside.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuComponent, AsideComponent, PresentationComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    AsideComponent,
    PresentationComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
