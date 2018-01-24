/**
 * Created by sengwon on 2018-01-09.
 */
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { UtilService } from './util.service';
import { ApiResponse } from './api-response';
import { todo } from './todo';

@Injectable()
export class TodoService{
  private apiBaseUrl = `${environment.apiBaseUrl}/todo`;
  constructor(
    private http: HttpClient,
    private utilService: UtilService,
  ){}
  show(writer: string):Promise<any>{
      return this.http.get<ApiResponse>(`${this.apiBaseUrl}`+'/?writer='+writer)
        .toPromise()
        .then(this.utilService.checkSuccess)
        .then(response=>{
          console.log(response.data);
          return response.data as todo[]
        })
        .catch(this.utilService.handleApiError);
  }
}
