import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, NosotrosComponent, ContactoComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
