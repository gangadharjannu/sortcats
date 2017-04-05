import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsComponent } from '../pets/pets.component';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { FilterByPipe } from '../pipes/filter-by.pipe';

describe('PetsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetsComponent, OrderByPipe, FilterByPipe]
    });

    this.fixture = TestBed.createComponent(PetsComponent);
    this.fixture.detectChanges();
    this.app = this.fixture.debugElement.componentInstance;
  }));


  it('should create', () => {
    expect(this.app).toBeTruthy();
  });
});
