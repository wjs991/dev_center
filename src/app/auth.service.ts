/**
 * Created by sengwon on 2018-01-06.
 */
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoadChildrenCallback, Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { UtilService } from './util.service';
import { ApiResponse } from './api-response';
import { User } from './user';
import {headersToString} from "selenium-webdriver/http";
import {Subject} from "rxjs/Subject";
import {any} from "codelyzer/util/function";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
  private apiBaseUrl = `${environment.apiBaseUrl}/auth`;
  private Username = new Subject<any>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private utilService: UtilService,
  ) { }

  login(username: string, password: string): Promise<any> { //1 api call이 성공하면 data(발급된 token)를 localStorage에 'token'으로 저장(1-1)합니다.
    return this.http.post<ApiResponse>(`${this.apiBaseUrl}/login`,{username:username, password:password})
      .toPromise()
      .then(this.utilService.checkSuccess)
      .then(response => {
        localStorage.setItem('token', response.data); //1-1
        this.Username.next(username);
        if(!this.getCurrentUser()) return this.me();
      })
      .catch(this.utilService.handleApiError);
  }

  me(): Promise<User> { //2 api call이 성공하면 data(user 정보)를 문자열로 변환한 후 localStorage에 'currentUser'로 저장(2-1)하고 data를 User로 return(2-2)합니다. 만약 api call이 실패하면 logout(2-3)합니다.
    return this.http.get<ApiResponse>(`${this.apiBaseUrl}/me`)
      .toPromise()
      .then(this.utilService.checkSuccess)
      .then(response => {
        localStorage.setItem('currentUser', JSON.stringify(response.data)); //2-1
        return response.data as User //2-2
      })
      .catch(response =>{
        this.logout(); //2-3
        return this.utilService.handleApiError(response);
      });
  }


  refresh(): Promise<any> { //3 api call이 성공하면 data(새로 발급된 token)를 localStorage에 'token'으로 저장(3-1)합니다. 만약 currentUser가 없다면 me함수를 호출(3-2)합니다. api call이 실패하면 logout(3-3)합니다.
    return this.http.get<ApiResponse>(`${this.apiBaseUrl}/refresh`)
      .toPromise()
      .then(this.utilService.checkSuccess)
      .then(response => {
        localStorage.setItem('token', response.data); //3-1
        console.log(localStorage.getItem('token'));
        if(!this.getCurrentUser()) return this.me(); //3-2
      })
      .catch(response =>{
        this.logout(); //3-3
        return this.utilService.handleApiError(response);
      });
  }

  getToken(): string{ //4 localStorage에서 token을 찾아 return합니다.
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  getCurrentUser(): User{ //5  localStorage에서 currentUser를 찾아 JSON으로 변경 한 후 User로 return합니다.
    return JSON.parse(localStorage.getItem('currentUser')) as User;
  }

  isLoggedIn(): boolean { //6 localStorage에 token이 있으면 true를, 아니면 false를 return합니다.
    var token = localStorage.getItem('token');
    if(token) return true;
    else return false;
  }

  logout(): void { //7 localStorage에 token과 currentUser를 지우고 '/'페이지로 이동합니다.
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  getname():JSON{
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
