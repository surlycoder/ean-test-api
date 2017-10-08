import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  public getTeams<T>() {
    return this._http
		.get<T>('/api/teams')
  }

}