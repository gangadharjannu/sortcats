// import { TestBed, getTestBed, inject, async } from '@angular/core/testing';
// import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod } from '@angular/http';
// import { ResponseOptions } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { cats, groupedCats } from './mockdata';
// import { CatsService } from './cats.service';

// describe('SERVICE: CatsService', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         CatsService,
//         MockBackend,
//         BaseRequestOptions,
//         {
//           provide: Http,
//           deps: [MockBackend, BaseRequestOptions],
//           useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
//             return new Http(backend, defaultOptions);
//           }
//         }
//       ]
//     });
//   }));

//   it('should define cats service', inject([CatsService], (service: CatsService) => {
//     expect(service).toBeTruthy();
//   }));

//   it('getCatsList method should be defined', inject([CatsService], (service: CatsService) => {
//     expect(service.getCats).toBeTruthy();
//   }));

//   it('should return all the cats in alphabetical order under a heading of the gender of their owner', async(inject([CatsService, MockBackend], (service: CatsService, backend: MockBackend) => {
//     backend.connections.subscribe((conn: MockConnection) => {
//       const options: ResponseOptions = new ResponseOptions({ body: cats });
//       conn.mockRespond(new Response(options));
//     });

//     service.getCats().then(res => {
//       expect(res).toEqual(groupedCats);
//     });

//   })));

// });

