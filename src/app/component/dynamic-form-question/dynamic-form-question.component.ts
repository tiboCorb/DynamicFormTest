import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators}from '@angular/forms';
import { NgClass } from '@angular/common';

import { QuestionBase }from '../../class/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
   get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() {

    console.log('from : ', this.form);
  }

  ngOInit() {
    console.log('from : ', this.form);
  }
}
