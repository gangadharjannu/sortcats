import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(array: Array<string>, prop: string, propVal: string): any {
    return array.filter(pet => pet[prop] === propVal);
  }
}
