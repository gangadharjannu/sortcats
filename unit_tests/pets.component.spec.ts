import {
  async, fakeAsync, tick, ComponentFixture, TestBed
} from '@angular/core/testing';

import { PetsComponent } from '../pets/pets.component';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { FilterByPipe } from '../pipes/filter-by.pipe';

import { Pets } from '../services/Pets';
describe('COMPONENT: PetsComponent', () => {
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [PetsComponent, OrderByPipe, FilterByPipe]
  //   }).compileComponents();

  //   this.fixture = TestBed.createComponent(PetsComponent);
  //   this.fixture.detectChanges();
  //   this.app = this.fixture.debugElement.componentInstance;
  // }));



  // it('should create the PetsComponent', () => {
  //   expect(this.app).toBeTruthy();
  // });


  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetsComponent, OrderByPipe, FilterByPipe]
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    this.fixture = TestBed.createComponent(PetsComponent);
    this.comp = this.fixture.componentInstance;

    // pretend that it was wired to something that supplied a pet list object
    this.petListObj = {
      gender: 'Male',
      pets: [{
        name: 'Garfield',
        type: 'Cat'
      }, {
        name: 'Fido',
        type: 'Dog'
      }, {
        name: 'Tom',
        type: 'Cat'
      }, {
        name: 'Max',
        type: 'Cat'
      }, {
        name: 'Sam',
        type: 'Dog'
      }, {
        name: 'Jim',
        type: 'Cat'
      }]
    };
    Object.assign(this.comp, this.petListObj);

    this.fixture.detectChanges(); // trigger initial data binding
  });
  it('should create the PetsComponent', () => {
    expect(this.comp).toBeTruthy();
  });

  it('should have gender prop defined', () => {
    const expectedGender = this.petListObj.gender;
    expect(this.comp.gender).toBe(expectedGender);
  });

  it('should have pets prop defined', () => {
    const expectedPets = this.petListObj.pets;
    expect(this.comp.pets.map(v => v.name)).toEqual(expectedPets.map(v => v.name));
  });

});
