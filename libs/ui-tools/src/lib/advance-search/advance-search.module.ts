import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';
import { InputModule } from '../input';
import { ButtonModule } from '../button';
import { IconModule } from '../icon';



@NgModule({
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    IconModule,
    MatAutocompleteModule
  ],
  declarations: [AdvanceSearchComponent],
  exports: [AdvanceSearchComponent],
})
export class AdvanceSearchModule { }
