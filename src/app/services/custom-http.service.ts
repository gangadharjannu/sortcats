import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';

import { Injectable } from '@angular/core';

import { LoaderService } from './loader.service';


import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

@Injectable()
export class CustomHttpService extends Http {
  // Extending Http
  pendingRequestsCount: number = 0;
  // sending ConnectionBackEnd, RequestOptions to Http using `super` method
  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private loaderService: LoaderService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.interceptor(super.request(url, options));
  }

  // get(url: string, options?: RequestOptionsArgs): Observable<Response> {
  //   return this.interceptor(super.get(url, options));
  // }

  // post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
  //   return this.interceptor(super.post(url, body, options));
  // }

  // put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
  //   return this.interceptor(super.put(url, body, options));
  // }

  // delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
  //   return this.interceptor(super.delete(url, options));
  // }

  // INTERCEPTOR
  interceptor(observable: Observable<Response>): Observable<Response> {
    this.loaderService.pendingRequests.next(++this.pendingRequestsCount);
    return observable
      .do((response: Response) => {
        // console.log(`Response: ${response}`);
      }, (error) => {
        console.log(`Error: ${error}`);
      })
      .finally(() => {
        this.loaderService.pendingRequests.next(--this.pendingRequestsCount);
      })
      .catch((error, caught) => {
        console.log(`Error: ${error}`);
        return caught;
      });
  }
}
