/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from "rxjs/operators";

type List = Map<string, string>
@Component({
  selector: 'gx-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvanceSearchComponent implements OnInit {

  @Input() displayKey = 'name';

  myControl = new FormControl();
  options: Array<Record<string, unknown>> = [
    {
      "name": "India"
    },
    {
      "name": "Australia"
    },
    {
      "name": "Japan"
    },
    {
      "name": "Canada"
    },
    {
      "name": "Germany"
    }
  ];
  filteredOptions: Observable<any>;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        map(value => this._filter(value))
      );
  }

  private _filter(value: string) {
    const filterValue = value;
    return this.options.filter(option => typeof option.name === 'string' ? option.name.toLowerCase().indexOf(filterValue) === 0 : false);
  }

}
