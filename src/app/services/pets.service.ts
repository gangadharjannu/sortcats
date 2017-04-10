import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Pets } from './Pets';
import { Constants } from '../config/app.constants';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PetsService {

  constructor(private http: Http) { }
  getCats = () => {
    return this.http.get(Constants.API_ENDPOINT_PUBLIC)
      .map((res) => {
        return res.json();
      }).map(this.petsList).toPromise();
  }

  petsList = (owners) => {
    let tempArr: Pets[] = [];

    owners.forEach(function (owner, idx) {
      const tempObj: Pets = {
        gender: owner.gender,
        pets: owner.pets
      };
      const genderIdx = tempArr.findIndex((v) => v.gender === owner.gender);
      if (genderIdx > -1) {
        tempArr[genderIdx].pets.push(...owner.pets);
      } else {
        tempArr.push(tempObj);
      }
    });
    return tempArr;
  }
}
