import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '../icon';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    IconModule, MatIconModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
