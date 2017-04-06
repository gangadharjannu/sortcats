import { FilterByPipe } from '../pipes/filter-by.pipe';

describe('PIPE: FilterByPipe', () => {
  beforeEach(() => {
    this.pipe = new FilterByPipe();
  });

  it('should create the filterBy pipe', () => {
    expect(this.pipe).toBeTruthy();
  });

  it('should filter array by type "Cat"', () => {
    const pets: any[] = [{
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
    const property = 'type',
      val = 'Cat';
    const filteredpets: string[] = pets.filter(v => v[property] === val);
    expect(this.pipe.transform(pets, property, val)).toEqual(filteredpets);
  });

  it('should sort array by type "Dog"', () => {
    const pets: any[] = [{
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
    const property = 'type',
      val = 'Cat';
    const filteredpets: string[] = pets.filter(v => v[property] === val);
    expect(this.pipe.transform(pets, property, val)).toEqual(filteredpets);
  });

});
