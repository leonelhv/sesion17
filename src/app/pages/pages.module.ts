import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, NosotrosComponent, ContactoComponent],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class PagesModule {}
