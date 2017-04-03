import { OrderByPipe } from './order-by.pipe';
describe('PIPE: OrderByPipe', () => {

    beforeEach(() => {
        this.pipe = new OrderByPipe();
    });

    it('should create the pipe', () => {
        expect(this.pipe).toBeTruthy();
    });

    it('should sort array in ascending order', () => {
        const names: string[] = ['B', 'A', 'F', 'D'];
        const sortedNames: string[] = Array.from(names).sort();
        const args = 'asc';
        expect(this.pipe.transform(names, args)).toEqual(sortedNames);
    });

    it('should sort array in descending order', () => {
        const names: string[] = ['B', 'A', 'F', 'D'];
        const sortedNames: string[] = Array.from(names).sort().reverse();
        const args = 'desc';
        expect(this.pipe.transform(names, args)).toEqual(sortedNames);
    });
});
