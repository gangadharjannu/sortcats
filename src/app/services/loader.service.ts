import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class LoaderService {
    public pendingRequests: BehaviorSubject<number> = new BehaviorSubject<number>(0);
};
