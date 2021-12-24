import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Data {
  reportNum;
  data;
  custom;
  details;
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

  getDummyData() {
    return this.http.get<any>('assets/jsonData.json')
      .toPromise()
      .then(res => <Data[]>res.data)
      .then(data => { return data ;});
  }

}

