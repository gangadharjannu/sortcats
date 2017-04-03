import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    transform(array: Array<string>, prop: string, order: string): Array<string> {
        let comparatorFn: (a: any, b: any) => number;

        if (order === 'asc') {
            comparatorFn = (a, b): number => {
                if (a[prop].toLowerCase() < b[prop].toLowerCase()) return -1;
                if (a[prop].toLowerCase() > b[prop].toLowerCase()) return 1;
                return 0;
            };

        } else {
            comparatorFn = (a, b): number => {
                if (a[prop].toLowerCase() > b[prop].toLowerCase()) return -1;
                if (a[prop].toLowerCase() < b[prop].toLowerCase()) return 1;
                return 0;
            };
        }

        return array.sort(comparatorFn);
    }
}
