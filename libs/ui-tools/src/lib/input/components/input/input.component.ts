/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import type { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'gx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  /**
   * Value of input
   */
  @Input() value: number | string = "";

  /**
   * Mat appearance of input
   */
  @Input() appearance: MatFormFieldAppearance = "outline";

  @Input() autocompleteRef: MatAutocomplete = null;

  @Input() formControl: FormControl;

  @Input() placeholder = "";


  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
