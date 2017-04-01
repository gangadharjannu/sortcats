import { TestBed, getTestBed, inject, async, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AppComponent } from './app.component';
import { CatsService } from './services/cats.service';
import { OrderByPipe } from './pipes/order-by.pipe';

class MockCatsService {
  public cats: any[] = [{
    gender: 'Male',
    pets: ['Garfield', 'Tom', 'Max', 'Jim']
  }, {
    gender: 'Female',
    pets: ['Garfield', 'Tabby', 'Simba']
  }];

  getCats() {
    return new Promise<any[]>((resolve, reject) => {
      resolve(this.cats);
    });
  }
}

describe('COMPONENT: AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, OrderByPipe],
      providers: [
        { provide: CatsService, useClass: MockCatsService },
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
    TestBed.overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: CatsService, useClass: MockCatsService }
        ]
      }
    });

    this.fixture = TestBed.createComponent(AppComponent);
    this.fixture.detectChanges();
    this.app = this.fixture.debugElement.componentInstance;
  }));

  it('should create the AppComponent', async(() => {
    expect(this.app).toBeTruthy();
  }));

  it(`should have as title 'AGL Coding Test'`, async(() => {
    expect(this.app.title).toEqual('AGL Coding Test');
  }));

  it('should render title in a h1 tag', async(() => {
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('AGL Coding Test');
  }));

  it('should list all the cats', fakeAsync(() => {
    this.fixture.componentInstance.getCats();
    tick();
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('li').length).toBe(7);
  }));

  it('should show the gender divs', fakeAsync(() => {
    this.fixture.componentInstance.getCats();
    tick();
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').children.length).toBe(2);
  }));

  it('should list all the cats in alphabetical order under a heading of the gender of their owner', fakeAsync(() => {
    this.fixture.componentInstance.getCats();
    tick();
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;

    const list = Array.from(compiled.querySelectorAll('li')).map((li) => (<any>li).innerText);
    const sortedCats = ['Garfield', 'Jim', 'Max', 'Tom', 'Garfield', 'Simba', 'Tabby']

    expect(list).toEqual(sortedCats);
  }));

});
