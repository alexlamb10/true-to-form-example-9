import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { addCustomErrorMessage } from 'ngx-reactive-forms-utils';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form = this._fb.group({
    firstName: ['', Validators.required],
  });

  firstNameValidate(control: AbstractControl) {
    return control.value === 'Alex'
      ? null
      : {
          invalidFirstName: true,
        };
  }
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    addCustomErrorMessage(
      'invalidFirstName',
      () => 'The first name must be Alex'
    );
  }
}
