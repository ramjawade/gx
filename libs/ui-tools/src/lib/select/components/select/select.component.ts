/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable, Subject } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
@Component({
  selector: 'gx-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {

  @Input() options: Array<Record<string, string>> = []
  @Input() displayKey = '';
  @Input() lable = '';

  @Input() data = "";

  @Input() privilege = false;
  @Input() noOfItems = 2;

  @Output() addOption: EventEmitter<string> = new EventEmitter()
  @Output() dataChange: EventEmitter<any> = new EventEmitter();

  @Input() formControl: FormControl = new FormControl();
  inputFormControl: FormControl = new FormControl("");
  more$: Subject<number[]> = new Subject();

  list: Observable<any>;
  noOfItemsCount = this.noOfItems;
  filteredList = [];
  constructor() { }

  ngOnInit(): void {
    this.list = merge(this.inputFormControl.valueChanges.pipe(tap(() => this.noOfItemsCount = this.noOfItems)), this.more$).pipe(
      startWith(''),
      map(() => {
        this.filteredList = this.options.filter(option => {
          return option[this.displayKey].toLowerCase().indexOf(this.inputFormControl.value ? this.inputFormControl.value : '') === 0
        })
        return this.filteredList.slice(0, this.noOfItemsCount)
      }))
  }

  onMoreClick() {
    this.noOfItemsCount = this.noOfItemsCount + this.noOfItems
    this.more$.next([]);
  }
  onAddOption() {
    this.addOption.emit(this.inputFormControl.value)
  }
  onOpen() {
    this.inputFormControl.setValue('')
  }

  modelChange() {
    this.dataChange.emit(this.data);
  }
}
