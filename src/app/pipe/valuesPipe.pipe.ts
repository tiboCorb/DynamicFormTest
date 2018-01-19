import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push(value[key]);
    }
    return keys;
  }
}