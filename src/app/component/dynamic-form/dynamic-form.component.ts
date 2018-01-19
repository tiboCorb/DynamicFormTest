import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../../class/question-base';
import { QuestionControlService }    from '../../service/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  public form: FormGroup;
  public payLoad = [];
  public key : Array<string>

  constructor(private qcs: QuestionControlService) {
    this.key= new Array();
    }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.questions.forEach(question => {
      this.key.push(question.key);      
    });
  }

  onSubmit() {
    this.payLoad.push(this.form.value);
    this.form.reset();
  }
}
