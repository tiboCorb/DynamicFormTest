import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { ClarityModule }                from '@clr/angular';

import { ValuesPipe }                   from './pipe/valuesPipe.pipe'

import { AppComponent }                 from './component/app.component';
import { DynamicFormComponent }         from './component/dynamic-form/dynamic-form.component';
import { DynamicTabComponent }          from './component/dynamic-tab/dynamic-tab.component';
import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';




@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, ClarityModule.forRoot() ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, DynamicTabComponent, ValuesPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
