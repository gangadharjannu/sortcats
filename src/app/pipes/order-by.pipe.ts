import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    transform(array: Array<string>, prop: string, order: string): Array<string> {
        let comparatorFn: (a: any, b: any) => number;

        if (order === 'asc') {
            comparatorFn = (a, b): number => String.prototype.localeCompare.call(a[prop], b[prop]);
        } else {
            comparatorFn = (a, b): number => String.prototype.localeCompare.call(b[prop], a[prop]);
        }

        return array && array.sort(comparatorFn);
    }
}
