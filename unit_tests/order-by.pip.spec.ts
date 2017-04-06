import { OrderByPipe } from '../pipes/order-by.pipe';
describe('PIPE: OrderByPipe', () => {

    beforeEach(() => {
        this.pipe = new OrderByPipe();
    });

    it('should create the orderBy pipe', () => {
        expect(this.pipe).toBeTruthy();
    });

    it('should sort array in ascending order', () => {
        const names: any[] = [{
            name: 'Garfield',
            type: 'Cat'
        }, {
            name: 'Tom',
            type: 'Cat'
        }, {
            name: 'Max',
            type: 'Cat'
        }, {
            name: 'Jim',
            type: 'Cat'
        }];
        const sortedNames: string[] = names.map(v => v.name).sort();

        const property = 'name',
            order = 'asc';
        expect(this.pipe.transform(names, property, order).map(v => v.name)).toEqual(sortedNames);
    });

    it('should sort array in descending order', () => {
        const names: any[] = [{
            name: 'Garfield',
            type: 'Cat'
        }, {
            name: 'Tom',
            type: 'Cat'
        }, {
            name: 'Max',
            type: 'Cat'
        }, {
            name: 'Jim',
            type: 'Cat'
        }];
        const sortedNames: string[] = names.map(v => v.name).sort().reverse();
        const property = 'name',
            order = 'desc';
        expect(this.pipe.transform(names, property, order).map(v => v.name)).toEqual(sortedNames);
    });

});
