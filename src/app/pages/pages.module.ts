import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports:[HomeComponent]
})
export class PagesModule { }
