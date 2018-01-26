import { environment } from '../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoadChildrenCallback, Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { UtilService } from './util.service';
import { ApiResponse } from './api-response';
import {Post} from "./post";

@Injectable()
export class PostService{
  private apiBaseUrl = `${environment.apiBaseUrl}/post`;
  private ddate:Date[];
  post:Post=new Post();
  Body:String;
  ID:Number;
  pageNum:number =0;
  constructor(
    private http: HttpClient,
    private router: Router,
    private utilService: UtilService,
  ) { }

  postshow(pageNum: Number):Promise<any>{
    return this.http.get<ApiResponse>(`${this.apiBaseUrl}/${pageNum}`)
      .toPromise()
      .then(this.utilService.checkSuccess)
      .then(response=>{
        console.log(response.data);
        return response.data as Post;
      })
      .catch(response=>{
        return this.utilService.handleApiError(response);
      })

  }

  postPost(post:Post):Promise<any>{
    return this.http.post<ApiResponse>(`${this.apiBaseUrl}`,post)
      .toPromise()
      .then(this.utilService.checkSuccess)
      .then(response=>{
        return response.data;
      })
      .catch(response=>{
        return this.utilService.handleApiError(response);
      })
  }
  postUpdate(post:Post,id: any):Promise<Post>{
    return this.http.put<ApiResponse>(`${this.apiBaseUrl}/${id}`, post)
      .toPromise()
      .then(this.utilService.checkSuccess)
      .then(response => {
        console.log(response.data);
        return response.data as Post;
      })
      .catch(this.utilService.handleApiError);
  }
  postDelete(title: String):Promise<Post>{
    return this.http.delete<ApiResponse>(`${this.apiBaseUrl}/${title}`)
      .toPromise()
      .then(this.utilService.checkSuccess)
      .then(response =>{
        return response.data as Post;
      })
      .catch(this.utilService.handleApiError);
  }
  getPost():any{
    return this.post;
  }
  setPost(pp:Post):any{
    this.post = pp;
  }
  getDate(): any{
    return this.ddate;
  }
  setDate(date:Date[]): any{
    this.ddate = date;
  }
  setBody(body: String){
    this.Body = body;
  }
  getBody(){
    return this.Body;
  }
  setId(id: Number){
    this.ID = id;
  }
  getId(){
    return this.ID;
  }

  setPageNum(){

    this.pageNum++;
    console.log(this.pageNum);
  }
  getPageNum():Number{
    return this.pageNum;
  }
  zeroToNum(){
    this.pageNum = 0;
  }
}
