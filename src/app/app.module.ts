import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { ClarityModule }                from '@clr/angular';

import { AppComponent }                 from './component/app.component';
import { DynamicFormComponent }         from './component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';




@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, ClarityModule.forRoot() ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
