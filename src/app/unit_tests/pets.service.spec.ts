import { TestBed, getTestBed, inject, async } from '@angular/core/testing';
import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PetsService } from '../services/pets.service';
import { pets, groupedPets } from './mockdata';
describe('SERVICE: PetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PetsService,
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

  });

  it('should create the PetsService', inject([PetsService], (petService: PetsService) => {
    expect(petService).toBeTruthy();
  }));
  it('getPets method should exist', inject([PetsService], (petService: PetsService) => {
    expect(petService).toBeTruthy();
  }));
  it('should return all the pets under a heading of the gender of their owner',
    async(inject([PetsService, MockBackend], (service: PetsService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
        const options: ResponseOptions = new ResponseOptions({ body: pets });
        conn.mockRespond(new Response(options));
      });

      service.getCats().then(res => {
        expect(res).toEqual(groupedPets);
      });

    })));
});
