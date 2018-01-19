import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-tab',
    templateUrl: './dynamic-tab.component.html'
  })

  export class DynamicTabComponent  {
    @Input() theadTab: Array<string>;
    @Input() payload: Array<any>;

    constructor() {}
  }
