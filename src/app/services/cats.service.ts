import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CatsService {

  constructor(public http: Http) {

  }
  getCats = () => {
    return this.http.get('http://crossorigin.me/http://agl-developer-test.azurewebsites.net/people.json')
      .map((res) => {
        return res.json();
      }).map(this.ownerList).toPromise();
  }

  ownerList = (owners) => {
    let tempArr = [];

    function filterCats(pets) {
      return pets && pets.filter((pet) => pet.type === 'Cat').map((pet) => pet.name);
    }
    owners.forEach(function (owner, idx) {
      let tempObj = {};
      tempObj['gender'] = owner.gender;
      tempObj['pets'] = filterCats(owner.pets);

      let genderIdx = tempArr.findIndex((v) => v.gender === owner.gender);
      if (genderIdx > -1) {
        tempArr[genderIdx].pets.push(...filterCats(owner.pets));
      } else {
        tempArr.push(tempObj);
      }
    });
    return tempArr;
  }
}
