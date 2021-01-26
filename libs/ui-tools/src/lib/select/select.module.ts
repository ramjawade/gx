import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from "@angular/material/select";

import { SelectComponent } from './components/select/select.component';
import { InputModule } from '../input';
import { ButtonModule } from '../button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SelectComponent]
})
export class SelectModule { }
