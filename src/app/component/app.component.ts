import { Component }       from '@angular/core';

import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    console.log(this.questions);
  }
}
