/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'um-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  data = [{ value: 'steak-0', viewValue: 'Steak' },
  { value: 'pizza-1', viewValue: 'Pizza' },
  { value: 'tacos-2', viewValue: 'Tacos' },
  { value: 'steak-3', viewValue: 'Steak3' },
  { value: 'steak-4', viewValue: 'Steak4' },
  { value: 'steak-5', viewValue: 'Steak5' },
  { value: 'steak-6', viewValue: 'Steak6' }]
  obsArray: BehaviorSubject<any> = new BehaviorSubject<any>(this.data);
  options$: Observable<any> = this.obsArray.asObservable();

  control1 = new FormControl();
  control2 = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
  addOption(name: string) {
    this.data = [...this.data, { value: name + "1", viewValue: name }]
    this.obsArray.next(this.data)
  }

}
