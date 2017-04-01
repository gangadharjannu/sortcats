import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    transform(array: Array<string>, args: string): Array<string> {
        if (args === 'asc') {
            return array.sort();
        } else {
            return array.sort().reverse();
        }
    }
}
