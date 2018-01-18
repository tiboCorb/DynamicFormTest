import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-tab',
    templateUrl: './dynamic-tab.component.html'
  })

  export class DynamicTabComponent implements OnInit {
    @Input() theadTab: Array<string>;
    @Input() payload: Array<any>;

    constructor() {}

    ngOnInit() {

    }

  }
