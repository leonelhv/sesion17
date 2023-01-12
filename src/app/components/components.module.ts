import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';

@NgModule({
  declarations: [NavbarComponent, MisionComponent, VisionComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, MisionComponent, VisionComponent],
})
export class ComponentsModule {}
